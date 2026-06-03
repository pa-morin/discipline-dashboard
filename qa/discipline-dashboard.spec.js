const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const appUrl = process.env.APP_URL || pathToFileURL(path.join(__dirname, "..", "index.html")).toString();

async function openFreshApp(page) {
  const consoleErrors = [];

  page.on("console", message => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", error => {
    consoleErrors.push(error.message);
  });

  await page.goto(appUrl);
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  return consoleErrors;
}

async function completeSetup(page, name = "Tester", title = "Command Center") {
  await expect(page.locator("#setupModal")).toBeVisible();
  await page.fill("#profileNameInput", name);
  await page.selectOption("#profileTitleInput", title);
  await page.locator("#setupForm button[type='submit']").click();
  await expect(page.locator("#setupModal")).toBeHidden();
  await expect(page.locator("#dashboardTitle")).toContainText(`${name}'s ${title}`);
}

async function addMission(page, text, day = "Monday", priority = false) {
  await page.locator(".tab-button[data-tab='goals']").click();
  await page.fill("#goalInput", text);
  await page.selectOption("#dayInput", day);
  if (priority) {
    await page.check("#priorityInput");
  }
  await page.click("#submitBtn");
}

async function addFinanceEntry(page, type, amount, note, category = "Other", needWant = "Want") {
  await page.selectOption("#financeTypeInput", type);
  if (type === "Spending") {
    await page.selectOption("#financeCategoryInput", category);
    await page.selectOption("#financeNeedWantInput", needWant);
  }
  await page.fill("#financeAmountInput", amount);
  await page.fill("#financeNoteInput", note);
  await page.click("#financeSubmitBtn");
}

async function openFinanceSection(page, name) {
  const section = page.locator("details.finance-collapsible").filter({ hasText: name });
  const isOpen = await section.evaluate(element => element.open);

  if (!isOpen) {
    await section.locator("summary").click();
  }
}

async function exportBackup(page) {
  const downloadPromise = page.waitForEvent("download");
  await page.locator(".backup-dropdown summary").click();
  await page.click("#exportBackupBtn");
  const download = await downloadPromise;
  const filePath = await download.path();

  return {
    filePath,
    data: JSON.parse(fs.readFileSync(filePath, "utf8"))
  };
}

async function expectNoHorizontalOverflow(page) {
  const overflow = await page.evaluate(() => {
    const viewportWidth = document.documentElement.clientWidth;
    const offenders = [...document.body.querySelectorAll("*")]
      .filter(element => {
        const style = window.getComputedStyle(element);
        if (style.display === "none" || style.visibility === "hidden") {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.width > 0 && (rect.right > viewportWidth + 2 || rect.left < -2);
      })
      .map(element => ({
        tag: element.tagName,
        id: element.id,
        className: element.className,
        right: Math.round(element.getBoundingClientRect().right),
        viewportWidth
      }));

    return offenders.slice(0, 5);
  });

  expect(overflow).toEqual([]);
}

test("first run feels alive instead of blank", async ({ page }) => {
  const consoleErrors = await openFreshApp(page);

  await expect(page.locator("#commandTab > section").first()).toHaveClass(/bible-verse-card/);
  await expect(page.locator("#welcomePanel")).toBeVisible();
  await expect(page.locator("#dailyCommandBriefing")).toBeVisible();
  await expect(page.locator("#dailyCommandBriefing")).toContainText("Today's Focus");
  await expect(page.locator("#dailyCommandSummary")).toContainText("Define the mission today");
  await expect(page.locator("#dailyRedFlags")).toContainText("No weekly goals exist");
  await expect(page.locator("#dailyReadinessRow")).toContainText("Goals");
  await expect(page.locator("#dailyReadinessRow")).toContainText("Needs goals");
  await expect(page.locator("#setupChecklist .checklist-item")).toHaveCount(5);
  await expect(page.locator("#todayMissionList")).toContainText("Add your first mission");
  await expect(page.locator("#accountabilityList")).toContainText("First mission not set yet");
  await expect(page.locator(".progress-details")).toBeVisible();
  await expect(page.locator(".progress-details")).toContainText("Progress Details");
  expect(consoleErrors).toEqual([]);
});

test("today's focus updates actions, readiness, red flags, and fallback plan", async ({ page }) => {
  const consoleErrors = await openFreshApp(page);
  await completeSetup(page);

  await expect(page.locator("#dailyCommandBriefing")).toBeVisible();
  await expect(page.locator("#dailyRedFlags")).toContainText("No weekly goals exist");
  await expect(page.locator("#dailyRedFlags")).toContainText("Journal has not been written today");
  await expect(page.locator("#dailyTopActions")).toContainText("Add weekly goals");

  await addMission(page, "Finish command briefing", "Monday", true);
  await page.getByRole("button", { name: "Command Center" }).click();

  await expect(page.locator("#dailyRedFlags")).not.toContainText("No weekly goals exist");
  await expect(page.locator("#dailyTopActions")).toContainText("Finish command briefing");
  await expect(page.locator("#dailyRedFlags")).toContainText("Journal has not been written today");

  await page.getByRole("button", { name: "Goals", exact: true }).click();
  await page.locator("#goalList .goal-card").filter({ hasText: "Finish command briefing" }).getByText("Complete").click();
  await page.getByRole("button", { name: "Command Center" }).click();
  await page.locator("#habitList .habit-card").locator("input").evaluateAll(inputs => inputs.forEach(input => {
    if (!input.checked) input.click();
  }));
  await page.getByRole("button", { name: "Journal" }).click();
  await page.fill("#journalWonInput", "Kept the focus tight.");
  await page.getByRole("button", { name: "Finance" }).click();
  await addFinanceEntry(page, "Income", "100", "Focus paycheck");
  await page.getByRole("button", { name: "Command Center" }).click();

  await expect(page.locator("#dailyReadinessRow")).toContainText("Habits");
  await expect(page.locator("#dailyReadinessRow")).toContainText("Complete");
  await expect(page.locator("#dailyReadinessRow")).toContainText("Journal");
  await expect(page.locator("#dailyReadinessRow")).toContainText("Done");
  await expect(page.locator("#dailyRedFlags")).toContainText("No major red flags");
  await expect(page.locator("#minimumDayCard")).not.toHaveAttribute("open", "");
  await expect(page.locator("#todayMissionList")).toContainText("Weekly mission complete");
  expect(consoleErrors).toEqual([]);
});

test("daily command briefing does not overflow on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const consoleErrors = await openFreshApp(page);
  await completeSetup(page);

  await expect(page.locator("#dailyCommandBriefing")).toBeVisible();
  await page.locator("#accountabilityReportPanel summary").click();
  await page.click("#previewReportBtn");
  await expectNoHorizontalOverflow(page);
  expect(consoleErrors).toEqual([]);
});

test("accountability report previews, copies, downloads, and protects journal privacy", async ({ page }) => {
  const consoleErrors = await openFreshApp(page);
  await completeSetup(page);
  await addMission(page, "Finish report export", "Monday", true);
  await addMission(page, "Stretch goal left open", "Tuesday");
  await page.locator("#goalList .goal-card").filter({ hasText: "Finish report export" }).getByText("Complete").click();
  await page.getByRole("button", { name: "Command Center" }).click();
  await page.locator("#habitList .habit-card").filter({ hasText: "Prayer" }).locator("input").check();
  await page.getByRole("button", { name: "Journal" }).click();
  await page.fill("#journalRantInput", "PRIVATE RANT SHOULD NOT EXPORT");
  await page.fill("#journalWonInput", "Report test win.");
  await page.getByRole("button", { name: "Finance" }).click();
  await addFinanceEntry(page, "Income", "100", "Report paycheck");
  await addFinanceEntry(page, "Spending", "25", "Report groceries");
  await page.getByRole("button", { name: "Command Center" }).click();

  await expect(page.locator("#accountabilityReportPanel")).toBeVisible();
  await page.locator("#accountabilityReportPanel summary").click();
  await page.click("#previewReportBtn");
  const preview = page.locator("#accountabilityReportPreview");

  await expect(preview).toHaveValue(/Weekly Accountability Report/);
  await expect(preview).toHaveValue(/Score Summary/);
  await expect(preview).toHaveValue(/Weekly Goals/);
  await expect(preview).toHaveValue(/Completed: 1\/2/);
  await expect(preview).toHaveValue(/Stretch goal left open/);
  await expect(preview).toHaveValue(/Non-Negotiables/);
  await expect(preview).toHaveValue(/Prayer: done today/);
  await expect(preview).toHaveValue(/Journal completed today/);
  await expect(preview).not.toHaveValue(/PRIVATE RANT SHOULD NOT EXPORT/);
  await expect(preview).toHaveValue(/Finance/);
  await expect(preview).toHaveValue(/Red Flags/);
  await expect(preview).toHaveValue(/Top 3 Priorities/);

  await page.click("#copyReportBtn");
  await expect(page.locator("#accountabilityReportStatus")).toContainText("copied");

  const downloadPromise = page.waitForEvent("download");
  await page.click("#downloadReportBtn");
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/^discipline-accountability-report-\d{4}-\d{2}-\d{2}\.txt$/);
  expect(consoleErrors).toEqual([]);
});

test("discipline score and non-negotiable streaks update from habits and goals", async ({ page }) => {
  const consoleErrors = await openFreshApp(page);
  await completeSetup(page);

  await expect(page.locator("#disciplineScoreSection")).toBeVisible();
  await expect(page.locator("#nonNegotiablesSection")).toBeVisible();
  await expect(page.locator("#habitList")).toContainText("Prayer");
  await expect(page.locator("#habitList")).toContainText("Workout");
  await expect(page.locator("#habitList")).toContainText("Reading");
  await expect(page.locator("#habitList")).toContainText("Journal");
  await expect(page.locator("#habitList")).toContainText("Bed Made");
  await expect(page.locator("#weeklyGoalScore")).toContainText("Needs goals");
  await expect(page.locator("#nonNegotiableScore")).toContainText("0%");

  await page.locator("#habitList .habit-card").filter({ hasText: "Prayer" }).locator("input").check();

  await expect(page.locator("#habitList .habit-card").filter({ hasText: "Prayer" })).toContainText("1 day");
  await expect(page.locator("#nonNegotiableScore")).toContainText("20%");

  await addMission(page, "Finish discipline score", "Monday", true);
  await page.locator("#goalList .goal-card").filter({ hasText: "Finish discipline score" }).getByText("Complete").click();
  await page.getByRole("button", { name: "Command Center" }).click();

  await expect(page.locator("#weeklyGoalScore")).toContainText("100%");
  expect(consoleErrors).toEqual([]);
});

test("discipline scoring stays stable with empty data on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const consoleErrors = await openFreshApp(page);

  await expect(page.locator("#disciplineScoreSection")).toBeVisible();
  await expect(page.locator("#overallDisciplineScore")).toContainText("Partial");
  await expect(page.locator("#nonNegotiablesSection")).toBeVisible();
  await expect(page.locator("#habitList")).toContainText("0 days");
  await expectNoHorizontalOverflow(page);
  expect(consoleErrors).toEqual([]);
});

test("localStorage failures do not crash the dashboard shell", async ({ page }) => {
  const consoleErrors = [];

  page.on("console", message => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", error => {
    consoleErrors.push(error.message);
  });

  await page.addInitScript(() => {
    ["getItem", "setItem", "removeItem"].forEach(method => {
      Storage.prototype[method] = () => {
        throw new Error("localStorage unavailable");
      };
    });
  });

  await page.goto(appUrl);

  await expect(page.locator("#welcomePanel")).toBeVisible();
  await expect(page.locator("#todayMissionList")).toContainText("Add your first mission");
  expect(consoleErrors).toEqual([]);
});

test("first launch checklist stays visible until every item is complete", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await expect(page.locator("#welcomePanel")).toBeVisible();
  await addMission(page, "Keep the checklist visible", "Monday");
  await page.getByRole("button", { name: "Command Center" }).click();
  await expect(page.locator("#welcomePanel")).toBeVisible();

  await page.locator("#habitList .habit-card").filter({ hasText: "Prayer" }).locator("input").check();
  await page.getByRole("button", { name: "Journal" }).click();
  await page.fill("#journalWonInput", "Started clean.");
  await page.fill("#journalFailedInput", "No failure yet.");
  await page.fill("#journalAttackInput", "Keep going.");
  await page.getByRole("button", { name: "Command Center" }).click();
  await expect(page.locator("#welcomePanel")).toBeVisible();

  const downloadPromise = page.waitForEvent("download");
  await page.locator(".backup-dropdown summary").click();
  await page.click("#exportBackupBtn");
  await downloadPromise;
  await expect(page.locator("#welcomePanel")).toBeHidden();

  await page.reload();
  await expect(page.locator("#welcomePanel")).toBeHidden();
});

test("setup, settings, backup dropdown, and tab customization do not break navigation", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.locator(".backup-dropdown summary").click();
  await expect(page.locator(".backup-menu")).toBeVisible();
  await expect(page.locator("#exportBackupBtn")).toBeVisible();
  await expect(page.locator("#importBackupBtn")).toBeVisible();

  await page.click("#settingsBtn");
  await expect(page.locator("#setupModal")).toBeVisible();
  await page.click("#customizeTabsBtn");
  await expect(page.locator("#tabsModal")).toBeVisible();
  await page.locator("#tabOrderList .tab-order-item").filter({ hasText: "Goals" }).getByText("Up").click();
  await page.click("#closeTabsModalBtn");
  await expect(page.locator(".tab-button").nth(0)).toContainText("Goals");
});

test("theme preferences apply and persist", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.click("#settingsBtn");
  await page.selectOption("#themeSelect", "light-focus");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light-focus");

  const lightAccent = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim());
  expect(lightAccent).toBe("#2563eb");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light-focus");
  await page.click("#settingsBtn");
  await expect(page.locator("#themeSelect")).toHaveValue("light-focus");
});

test("theme presets keep primary dashboard text readable", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await addMission(page, "Readable theme mission", "Monday", true);
  await page.click("#settingsBtn");

  const themes = ["dark-discipline", "light-focus", "midnight-blue", "forest-green", "high-contrast", "warm-minimal"];

  for (const theme of themes) {
    await page.selectOption("#themeSelect", theme);
    const lowContrastItems = await page.evaluate(() => {
      function parseRgb(text) {
        const match = text.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        return match ? [Number(match[1]), Number(match[2]), Number(match[3])] : null;
      }

      function luminance(rgb) {
        const values = rgb.map(value => {
          value /= 255;
          return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
        });

        return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
      }

      function contrast(foreground, background) {
        const light = Math.max(luminance(foreground), luminance(background));
        const dark = Math.min(luminance(foreground), luminance(background));

        return (light + 0.05) / (dark + 0.05);
      }

      function effectiveBackground(element) {
        let current = element;

        while (current && current !== document.documentElement) {
          const background = getComputedStyle(current).backgroundColor;

          if (background && background !== "transparent" && background !== "rgba(0, 0, 0, 0)") {
            return background;
          }

          current = current.parentElement;
        }

        return getComputedStyle(document.body).backgroundColor;
      }

      return [...document.querySelectorAll(".panel, .goal-card, .settings-card, button, input, select, textarea")]
        .filter(element => {
          const rect = element.getBoundingClientRect();
          const text = (element.innerText || element.value || element.placeholder || element.textContent || "").trim();

          return rect.width > 0 && rect.height > 0 && text;
        })
        .map(element => ({
          label: element.id || element.className || element.tagName,
          color: getComputedStyle(element).color,
          background: effectiveBackground(element)
        }))
        .filter(item => {
          const foreground = parseRgb(item.color);
          const background = parseRgb(item.background);

          return foreground && background && contrast(foreground, background) < 3;
        });
    });

    expect(lowContrastItems).toEqual([]);
  }
});

test("weekly mission flow: add, complete, edit, collapse, start new week, inspect history", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await addMission(page, "Finish math review", "Monday", true);
  await addMission(page, "Workout", "Monday");

  await expect(page.locator("#goalList .goal-card")).toHaveCount(2);
  await expect(page.locator("#weekSummary")).toContainText("0 of 2");

  await page.locator("#goalList .goal-card").filter({ hasText: "Finish math review" }).getByText("Complete").click();
  await expect(page.locator("#completedCount")).toHaveText("1");

  await page.locator("#goalList .goal-card").filter({ hasText: "Workout" }).getByText("Edit").click();
  await page.fill("#goalInput", "Workout 45 minutes");
  await page.click("#submitBtn");
  await expect(page.locator("#goalList")).toContainText("Workout 45 minutes");

  await page.click("#toggleWeekBtn");
  await expect(page.locator("#collapsedWeekPreview")).toBeVisible();
  await page.click("#toggleWeekBtn");
  await expect(page.locator("#goalList")).toBeVisible();

  await page.fill("#wentWellInput", "Kept the important promise.");
  page.once("dialog", dialog => dialog.accept());
  await page.click("#newWeekBtn");
  await page.getByRole("button", { name: "History" }).click();
  await expect(page.locator("#historyList")).toContainText("50%");
  await page.locator("#historyList .history-item").first().click();
  await expect(page.locator("#historyModal")).toBeVisible();
  await expect(page.locator("#historyModalBody")).toContainText("Finish math review");
});

test("history tab uses clean week labels, trends, and recent history collapse", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.evaluate(() => {
    const weeks = [
      ["2026-03-22", 50],
      ["2026-03-29", 67],
      ["2026-06-07", 64],
      ["2026-06-14", 93],
      ["2026-06-21", 94],
      ["2026-06-28", 81]
    ];

    localStorage.setItem("missionTrackerHistory", JSON.stringify(weeks.map(([savedDate, percent], index) => ({
      week: `Week ending ${savedDate}`,
      savedDate,
      completed: Math.round(percent / 10),
      total: 10,
      percent,
      goals: [],
      review: {
        wentWell: `Win ${index + 1}`,
        failed: "",
        improve: ""
      }
    }))));
  });
  await page.reload();
  await page.getByRole("button", { name: "History" }).click();

  await expect(page.locator("#historyQuarterSelect")).toHaveValue("2026-Q2");
  await expect(page.locator("#historyList .history-item")).toHaveCount(4);
  await expect(page.locator("#historyList .history-item").first()).toContainText("Week of Jun 22");
  await expect(page.locator("#historyList .history-item").first()).toContainText("Jun 28");
  await expect(page.locator("#historyList .history-item").first()).toContainText("81%");
  await expect(page.locator("#historyList .history-item").first()).toContainText("↓ -13%");
  await expect(page.locator("#historyList .history-item").nth(1)).toHaveClass(/elite-week/);
  await expect(page.locator("#historyList .history-item").nth(1)).toContainText("94% • Gold Week");
  await expect(page.locator("#monthlyScorecard")).toContainText("Gold Weeks This Month");
  await expect(page.locator("#monthlyScorecard .gold-week-summary")).toContainText("2");
  await expect(page.locator("#historyList")).not.toContainText("Week ending");
  await expect(page.getByRole("button", { name: /View Older Weeks/ })).toHaveCount(0);

  await page.selectOption("#historyQuarterSelect", "2026-Q1");
  await expect(page.locator("#historyList .history-item")).toHaveCount(2);
  await expect(page.locator("#historyList .history-item").first()).toContainText("Week of Mar 23");
});

test("archived history weeks can generate and save AI reviews", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.evaluate(() => {
    localStorage.setItem("missionTrackerHistory", JSON.stringify([{
      week: "Week ending 2026-05-24",
      savedDate: "2026-05-24",
      completed: 1,
      total: 2,
      percent: 50,
      goals: [
        { text: "Finish archived win", category: "School", day: "Monday", priority: true, done: true },
        { text: "Missed archived lift", category: "Fitness", day: "Wednesday", priority: false, done: false }
      ],
      review: {
        wentWell: "I finished the most important work.",
        failed: "I skipped training.",
        improve: "Plan workouts earlier."
      }
    }]));
    localStorage.setItem("missionTrackerJournal", JSON.stringify({
      "2026-05-22": {
        won: "Protected study time.",
        failed: "Stayed up too late.",
        attack: "Start earlier tomorrow.",
        rant: ""
      }
    }));
    localStorage.setItem("disciplineDashboardFinance", JSON.stringify([
      { date: "2026-05-23", type: "Spending", amount: 25, note: "Archived week lunch", category: "Food", needWant: "Want" }
    ]));
  });

  await page.reload();
  await page.evaluate(() => {
    window.fetch = async (_url, options) => {
      window.__archiveAiRequest = JSON.parse(options.body);

      return {
        ok: true,
        status: 200,
        json: async () => ({ review: "Weekly Summary\nArchived review generated.\n\nTop 3 Priorities\n1. Train earlier." })
      };
    };
  });

  await page.getByRole("button", { name: "History" }).click();
  await page.locator("#historyList .history-item").first().click();
  await expect(page.locator("#historyModal")).toBeVisible();
  await page.click("#generateArchiveAiReviewBtn");
  const requestBody = await page.evaluate(() => window.__archiveAiRequest);
  expect(requestBody.prompt).toContain("Finish archived win");
  expect(requestBody.prompt).toContain("Protected study time.");
  expect(requestBody.prompt).toContain("$25");
  await expect(page.locator("#archiveAiReviewOutput")).toContainText("Archived review generated");
  await expect(page.locator("#archiveAiReviewStatus")).toContainText("saved");

  await page.click("#closeHistoryModalBtn");
  await page.locator("#historyList .history-item").first().click();
  await expect(page.locator("#archiveAiReviewOutput")).toContainText("Archived review generated");
});

test("current week goals are sorted by weekday instead of creation order", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await addMission(page, "Friday finish line", "Friday", true);
  await addMission(page, "Monday launch", "Monday");
  await addMission(page, "Wednesday checkpoint", "Wednesday");
  await addMission(page, "Tuesday follow through", "Tuesday");

  const orderedGoals = await page.locator("#goalList .goal-card .goal-text").evaluateAll(items =>
    items.map(item => item.textContent.trim())
  );

  expect(orderedGoals).toEqual([
    "Monday launch",
    "Tuesday follow through",
    "Wednesday checkpoint",
    "Friday finish line"
  ]);

  await page.locator("#goalList .goal-card").filter({ hasText: "Friday finish line" }).getByText("Complete").click();
  await expect(page.locator("#goalList .goal-card").filter({ hasText: "Friday finish line" })).toHaveClass(/completed/);

  await page.locator("#goalList .goal-card").filter({ hasText: "Monday launch" }).getByText("Edit").click();
  await page.fill("#goalInput", "Monday launch edited");
  await page.click("#submitBtn");
  await expect(page.locator("#goalList .goal-card").first()).toContainText("Monday launch edited");
});

test("weekly goal form clears after adding a mission", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.locator(".tab-button[data-tab='goals']").click();
  await page.fill("#goalInput", "Clear this field after submit");
  await page.click("#submitBtn");

  await expect(page.locator("#goalList")).toContainText("Clear this field after submit");
  await expect(page.locator("#goalInput")).toHaveValue("");
  await expect(page.locator("#submitBtn")).toHaveText("Add Goal");
});

test("goals tab shows the active week range", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.locator(".tab-button[data-tab='goals']").click();
  await expect(page.locator("#currentWeekLabel")).toContainText("Week of");
  await expect(page.locator("#currentWeekLabel")).toContainText("to");
});

test("briefing and accountability warnings jump to the right parts of the command center", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  const today = await page.evaluate(() => new Date().toLocaleDateString("en-US", { weekday: "long" }));
  await addMission(page, "Priority mission for today", today, true);
  await page.getByRole("button", { name: "Command Center" }).click();

  await page.locator("#todayMissionList .clickable-item").first().click();
  await expect(page.locator("#goalList .goal-card").first()).toHaveClass(/temporary-highlight/);

  await page.getByRole("button", { name: "Command Center" }).click();
  await page.locator("#dailyRedFlags .command-flag").filter({ hasText: "priority" }).click();
  await expect(page.locator("#goalList .goal-card").first()).toHaveClass(/temporary-highlight/);
});

test("non-negotiables save to localStorage and survive reload", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.locator("#habitList .habit-card").filter({ hasText: "Prayer" }).locator("input").check();
  await expect(page.locator("#habitSummary")).toContainText("1 of");
  await page.reload();
  await expect(page.locator("#habitList .habit-card").filter({ hasText: "Prayer" }).locator("input")).toBeChecked();
});

test("non-negotiables and goal categories are editable without losing old checks", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.locator("#habitList .habit-card").filter({ hasText: "Prayer" }).locator("input").check();
  await page.click("#settingsBtn");

  await page.locator("#nonNegotiableEditorList input").first().fill("Morning Prayer");
  await page.locator("#nonNegotiableEditorList .editor-item").first().getByText("Save").click();
  await page.click("#closeSetupModalBtn");
  await page.getByRole("button", { name: "Command Center" }).click();
  await expect(page.locator("#habitList .habit-card").filter({ hasText: "Morning Prayer" }).locator("input")).toBeChecked();

  await page.click("#settingsBtn");
  await page.fill("#goalCategoryInput", "Discipline");
  await page.locator("#goalCategoryForm button[type='submit']").click();
  await page.click("#closeSetupModalBtn");
  await page.locator(".tab-button[data-tab='goals']").click();
  await expect(page.locator("#categoryInput")).toContainText("Discipline");
  await page.fill("#goalInput", "Category mission");
  await page.selectOption("#categoryInput", "Discipline");
  await page.click("#submitBtn");
  await expect(page.locator("#goalList")).toContainText("Discipline");

  await page.click("#settingsBtn");
  await page.locator("#goalCategoryEditorList input").last().fill("Self-Control");
  await page.locator("#goalCategoryEditorList .editor-item").last().getByText("Save").click();
  await page.click("#closeSetupModalBtn");
  await page.locator(".tab-button[data-tab='goals']").click();
  await expect(page.locator("#goalList")).toContainText("Self-Control");
  await page.reload();
  await page.locator(".tab-button[data-tab='goals']").click();
  await expect(page.locator("#goalList")).toContainText("Self-Control");
});

test("active week auto archives when a new week starts", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.evaluate(() => {
    localStorage.setItem("disciplineDashboardActiveWeekStart", "2026-05-18");
    localStorage.setItem("missionTrackerGoals", JSON.stringify([
      { text: "Forgotten archived mission", category: "Personal", day: "Sunday", priority: true, done: true },
      { text: "Forgotten missed mission", category: "Fitness", day: "Saturday", priority: false, done: false }
    ]));
    localStorage.setItem("missionTrackerReview", JSON.stringify({
      wentWell: "Closed the important task.",
      failed: "Forgot to archive manually.",
      improve: "Trust the rollover."
    }));
  });

  await page.reload();
  await expect(page.locator("#goalList")).toContainText("No missions yet");
  await page.getByRole("button", { name: "History" }).click();
  await expect(page.locator("#historyList")).toContainText("50%");
  await page.locator("#historyList .history-item").first().click();
  await expect(page.locator("#historyModalBody")).toContainText("Forgotten archived mission");
  await expect(page.locator("#historyModalBody")).toContainText("Closed the important task.");
});

test("weekly review summarizes the week without current-week AI controls", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await addMission(page, "Finish review feature", "Monday", true);
  await addMission(page, "Missed but visible", "Tuesday");
  await page.locator("#goalList .goal-card").filter({ hasText: "Finish review feature" }).getByText("Complete").click();
  await page.getByRole("button", { name: "Journal" }).click();
  await page.fill("#journalWonInput", "Built the review flow.");
  await page.fill("#journalFailedInput", "Need a cleaner finish.");

  await page.locator(".tab-button[data-tab='goals']").click();
  await expect(page.locator("#weeklyReviewSummary")).toContainText("50%");
  await expect(page.locator("#weeklyReviewSummary")).toContainText("Finish review feature");
  await expect(page.locator("#weeklyReviewSummary")).toContainText("Missed but visible");
  await expect(page.locator("#generateAiReviewBtn")).toHaveCount(0);
  await expect(page.locator("#copyAiPromptBtn")).toHaveCount(0);
  await expect(page.locator("#copyAiReviewBtn")).toHaveCount(0);
});

test("finance stays simple: multiple entries, transfer ignored, filter works", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Finance" }).click();

  await addFinanceEntry(page, "Income", "1000", "Paycheck");
  await addFinanceEntry(page, "Spending", "125.50", "Groceries");
  await addFinanceEntry(page, "Savings", "200", "Emergency fund");
  await addFinanceEntry(page, "Transfer", "300", "Move between own accounts");

  await expect(page.locator("#madeThisMonthValue")).toContainText("$1,000");
  await expect(page.locator("#spentThisMonthValue")).toContainText("$125.50");
  await expect(page.locator("#savedThisMonthValue")).toContainText("$200");
  await expect(page.locator("#remainingMoneyValue")).toContainText("$674.50");
  await openFinanceSection(page, "Transaction History");
  await expect(page.locator("#financeEntryList .finance-ledger-item")).toHaveCount(4);

  await page.selectOption("#financeFilterInput", "Transfer");
  await expect(page.locator("#financeEntryList .finance-ledger-item")).toHaveCount(1);
  await expect(page.locator("#financeEntryList")).toContainText("Move between own accounts");
});

test("spending breakdown tracks category and need/want tags", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Finance" }).click();

  await addFinanceEntry(page, "Income", "1000", "Paycheck");
  await addFinanceEntry(page, "Savings", "200", "Savings transfer");
  await addFinanceEntry(page, "Spending", "80", "Groceries", "Food", "Need");
  await addFinanceEntry(page, "Spending", "120", "Shoes", "Shopping", "Want");
  await addFinanceEntry(page, "Spending", "30", "Movie night", "Entertainment", "Want");

  await expect(page.locator("#needsSpendingValue")).toContainText("$80");
  await expect(page.locator("#wantsSpendingValue")).toContainText("$150");
  await expect(page.locator("#wantsPercentValue")).toContainText("65%");
  await expect(page.locator("#spendingCategoryList")).toContainText("Food");
  await expect(page.locator("#spendingCategoryList")).toContainText("$80");
  await expect(page.locator("#spendingInsightMessages")).toContainText("Most of your spending this month is Wants.");
  await openFinanceSection(page, "Transaction History");
  await expect(page.locator("#financeEntryList")).toContainText("Need");
  await expect(page.locator("#financeEntryList")).toContainText("Want");
});

test("weekly spending shows one selected week with budget and daily allowance", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Finance" }).click();
  const currentWeekLabel = await page.evaluate(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startOffset = (start.getDay() + 6) % 7;
    start.setDate(start.getDate() - startOffset);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    const format = date => date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

    return `Week of ${format(start)} – ${format(end)}`;
  });

  await expect(page.locator("#financeWeekSelect option:checked")).toHaveText(currentWeekLabel);
  await expect(page.locator("#weeklySpendingCard")).toContainText("No weekly allowance left");

  const entries = [
    ["2026-04-02", "60", "Week one spending"],
    ["2026-04-10", "90", "Week two spending"],
    ["2026-04-17", "120", "Week three spending"],
    ["2026-04-24", "160", "Week four spending"]
  ];

  for (const [date, amount, note] of entries) {
    await page.fill("#financeDateInput", date);
    await addFinanceEntry(page, "Spending", amount, note, "Other", "Want");
  }

  await page.fill("#financeMonthInput", "2026-04");
  await page.locator("#financeMonthInput").dispatchEvent("change");
  await expect(page.locator("#weeklySpendingCard")).toHaveCount(1);
  await page.selectOption("#financeWeekSelect", { label: "Week of Mar 30 – Apr 5" });
  await expect(page.locator("#weeklySpendingCard")).toContainText("Week of Mar 30 – Apr 5");
  await expect(page.locator("#weeklySpendingCard")).toContainText("$60");
  await expect(page.locator("#weeklySpendingCard")).toContainText("$100");
  await expect(page.locator("#weeklySpendingCard")).toContainText("Remaining Budget");
  await expect(page.locator("#weeklySpendingCard")).toContainText("You are on track this week");

  await page.selectOption("#financeWeekSelect", { label: "Week of Apr 6 – Apr 12" });
  await expect(page.locator("#weeklySpendingCard")).toContainText("You are close to your weekly limit");

  await page.selectOption("#financeWeekSelect", { label: "Week of Apr 20 – Apr 26" });
  await expect(page.locator("#weeklySpendingCard")).toContainText("Amount Over Budget");
  await expect(page.locator("#weeklySpendingCard")).toContainText("You are over your weekly budget");
});

test("transaction history shows ten entries by default with show more and less", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Finance" }).click();

  for (let index = 1; index <= 12; index += 1) {
    await addFinanceEntry(page, "Spending", String(index), `History item ${index}`, "Other", "Want");
  }

  await openFinanceSection(page, "Transaction History");
  await expect(page.locator("#financeEntryList .finance-ledger-item")).toHaveCount(10);
  await expect(page.locator("#toggleFinanceHistoryBtn")).toBeVisible();
  await page.click("#toggleFinanceHistoryBtn");
  await expect(page.locator("#financeEntryList .finance-ledger-item")).toHaveCount(12);
  await expect(page.locator("#toggleFinanceHistoryBtn")).toHaveText("Show Less");
  await page.click("#toggleFinanceHistoryBtn");
  await expect(page.locator("#financeEntryList .finance-ledger-item")).toHaveCount(10);
});

test("transaction history sort changes display order only", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Finance" }).click();
  await page.fill("#financeMonthInput", "2026-04");
  await page.locator("#financeMonthInput").dispatchEvent("change");

  await page.fill("#financeDateInput", "2026-04-01");
  await addFinanceEntry(page, "Spending", "15", "Small purchase", "Other", "Want");
  await page.fill("#financeDateInput", "2026-04-02");
  await addFinanceEntry(page, "Spending", "90", "Big purchase", "Other", "Want");
  await page.fill("#financeDateInput", "2026-04-03");
  await addFinanceEntry(page, "Spending", "30", "Medium purchase", "Other", "Want");

  await openFinanceSection(page, "Transaction History");
  await expect(page.locator("#financeEntryList .finance-ledger-item").first()).toContainText("Medium purchase");

  await page.selectOption("#financeSortInput", "highest");
  await expect(page.locator("#financeEntryList .finance-ledger-item").first()).toContainText("Big purchase");

  await page.selectOption("#financeSortInput", "lowest");
  await expect(page.locator("#financeEntryList .finance-ledger-item").first()).toContainText("Small purchase");

  await page.selectOption("#financeSortInput", "oldest");
  await expect(page.locator("#financeEntryList .finance-ledger-item").first()).toContainText("Small purchase");
});

test("weird goal inputs are handled without corrupting the weekly list", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.locator(".tab-button[data-tab='goals']").click();
  await page.fill("#goalInput", "     ");
  await page.click("#submitBtn");
  await expect(page.locator("#goalList .goal-card")).toHaveCount(0);
  await expect(page.locator("#goalList")).toContainText("No missions yet");

  const longGoal = `Long mission ${"A".repeat(220)} 🚀 !@#$%^&*()`;
  await addMission(page, longGoal, "Wednesday", true);
  await addMission(page, "Duplicate mission", "Friday");
  await addMission(page, "Duplicate mission", "Friday");

  await expect(page.locator("#goalList .goal-card")).toHaveCount(3);
  await expect(page.locator("#goalList")).toContainText("🚀");
  await expect(page.locator("#goalList .goal-card").filter({ hasText: "Duplicate mission" })).toHaveCount(2);
  await expectNoHorizontalOverflow(page);
});

test("rapid goal submit does not create accidental duplicates", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await page.locator(".tab-button[data-tab='goals']").click();
  await page.fill("#goalInput", "Single rapid mission");
  await Promise.all([
    page.click("#submitBtn"),
    page.click("#submitBtn")
  ]);

  await expect(page.locator("#goalList .goal-card").filter({ hasText: "Single rapid mission" })).toHaveCount(1);
});

test("finance edge cases keep money math honest", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Finance" }).click();

  await addFinanceEntry(page, "Income", "9999999.99", "Large paycheck");
  await addFinanceEntry(page, "Spending", "0.01", "Penny check");
  await addFinanceEntry(page, "Spending", "125.50", "Decimal spending");
  await addFinanceEntry(page, "Transfer", "5000000.75", "Huge internal transfer");
  await addFinanceEntry(page, "Spending", "125.50", "Decimal spending");

  await page.selectOption("#financeTypeInput", "Spending");
  await page.fill("#financeAmountInput", "-10");
  await page.fill("#financeNoteInput", "Bad negative");
  await page.click("#financeSubmitBtn");

  await expect(page.locator("#madeThisMonthValue")).toContainText("$9,999,999.99");
  await expect(page.locator("#spentThisMonthValue")).toContainText("$251.01");
  await expect(page.locator("#remainingMoneyValue")).toContainText("$9,999,748.98");
  await openFinanceSection(page, "Transaction History");
  await expect(page.locator("#financeEntryList")).not.toContainText("Bad negative");
  await expect(page.locator("#financeEntryList .finance-ledger-item")).toHaveCount(5);

  await page.selectOption("#financeFilterInput", "Transfer");
  await expect(page.locator("#financeEntryList .finance-ledger-item")).toHaveCount(1);
});

test("CSV import separates spending, real income, and transfers", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Finance" }).click();
  await page.fill("#financeMonthInput", "2026-04");
  await page.locator("#financeMonthInput").dispatchEvent("change");

  const csv = [
    "Posting Date,Transaction Date,Amount,Credit Debit Indicator,Description,Category",
    "04/05/2026,04/05/2026,18.25,Debit,CHICK-FIL-A,Restaurants",
    "04/06/2026,04/06/2026,500.00,Credit,Transfer From Checking,Transfer",
    "04/07/2026,04/07/2026,1200.00,Credit,Payroll Deposit,Income"
  ].join("\n");

  page.once("dialog", dialog => dialog.accept());
  await page.setInputFiles("#transactionImportInput", {
    name: "navy-federal.csv",
    mimeType: "text/csv",
    buffer: Buffer.from(csv)
  });

  await expect(page.locator("#spentThisMonthValue")).toContainText("$18.25");
  await expect(page.locator("#madeThisMonthValue")).toContainText("$1,200");
  await openFinanceSection(page, "Transaction History");
  await expect(page.locator("#financeEntryList")).toContainText("CHICK-FIL-A");
  await page.selectOption("#financeFilterInput", "Transfer");
  await expect(page.locator("#financeEntryList")).toContainText("Transfer From Checking");
});

test("CSV import tolerates messy rows and classifies money safely", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Finance" }).click();
  await page.fill("#financeMonthInput", "2026-04");
  await page.locator("#financeMonthInput").dispatchEvent("change");

  const csv = [
    "Posting Date,Transaction Date,Amount,Credit Debit Indicator,Description,Category",
    "",
    "04/08/2026,04/08/2026,\"2,345.67\",Credit,\"Payroll, Main Job\",Income",
    "04/09/2026,04/09/2026,42.10,Debit,\"Gas Station #42\",Gas",
    "04/10/2026,04/10/2026,12.34,Credit,\"Refund Amazon\",Shopping",
    "04/11/2026,04/11/2026,100.00,Credit,\"Transfer From Checking\",Transfer",
    "not a date,not a date,77.77,Debit,\"Broken date row\",Food",
    "04/12/2026,04/12/2026,,Debit,\"Missing amount\",Food"
  ].join("\n");

  page.once("dialog", dialog => dialog.accept());
  await page.setInputFiles("#transactionImportInput", {
    name: "messy-bank.csv",
    mimeType: "text/csv",
    buffer: Buffer.from(csv)
  });

  await expect(page.locator("#madeThisMonthValue")).toContainText("$2,358.01");
  await expect(page.locator("#spentThisMonthValue")).toContainText("$42.10");
  await openFinanceSection(page, "Transaction History");
  await expect(page.locator("#financeEntryList .finance-ledger-item")).toHaveCount(4);

  await page.selectOption("#financeFilterInput", "Transfer");
  await expect(page.locator("#financeEntryList")).toContainText("Transfer From Checking");
  await expect(page.locator("#financeEntryList")).not.toContainText("Broken date row");
});

test("backup export contains every major data bucket", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await addMission(page, "Backup mission", "Tuesday", true);

  const { data: backup } = await exportBackup(page);

  expect(backup.goals.length).toBe(1);
  expect(backup).toHaveProperty("history");
  expect(backup).toHaveProperty("journal");
  expect(backup).toHaveProperty("finance");
  expect(backup).toHaveProperty("planningGoals");
  expect(backup).toHaveProperty("settings");
});

test("backup import restores major data after local data is cleared", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page, "ImportTester", "Command Center");
  await addMission(page, "Restore this mission", "Tuesday", true);
  await page.getByRole("button", { name: "Command Center" }).click();
  await page.locator("#habitList .habit-card").filter({ hasText: "Prayer" }).locator("input").check();

  await page.getByRole("button", { name: "Finance" }).click();
  await addFinanceEntry(page, "Income", "700.25", "Restore paycheck");
  await addFinanceEntry(page, "Spending", "20.10", "Restore spending");

  await page.getByRole("button", { name: "Journal" }).click();
  await page.fill("#journalWonInput", "Backup restore win.");
  await page.fill("#journalFailedInput", "Backup restore lesson.");
  await page.fill("#journalAttackInput", "Backup restore next move.");

  const { filePath } = await exportBackup(page);
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  page.once("dialog", dialog => dialog.accept());
  await page.setInputFiles("#backupInput", filePath);

  await expect(page.locator("#dashboardTitle")).toContainText("ImportTester's Command Center");
  await expect(page.locator("#goalList")).toContainText("Restore this mission");
  await expect(page.locator("#habitList .habit-card").filter({ hasText: "Prayer" }).locator("input")).toBeChecked();

  await page.getByRole("button", { name: "Finance" }).click();
  await expect(page.locator("#madeThisMonthValue")).toContainText("$700.25");
  await expect(page.locator("#spentThisMonthValue")).toContainText("$20.10");

  await page.getByRole("button", { name: "Journal" }).click();
  await expect(page.locator("#journalWonInput")).toHaveValue("Backup restore win.");
});

test("corrupted backup import fails gracefully and preserves current data", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await addMission(page, "Do not lose me", "Thursday");

  page.once("dialog", async dialog => {
    expect(dialog.message()).toContain("not valid JSON");
    await dialog.accept();
  });

  await page.setInputFiles("#backupInput", {
    name: "broken-backup.json",
    mimeType: "application/json",
    buffer: Buffer.from("{ this is not valid json")
  });

  await expect(page.locator("#goalList")).toContainText("Do not lose me");
});

test("journal saves today's entry and shows it after reload", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await page.getByRole("button", { name: "Journal" }).click();

  await page.fill("#journalWonInput", "I followed the plan.");
  await page.fill("#journalFailedInput", "I drifted after lunch.");
  await page.fill("#journalAttackInput", "I will start earlier.");
  await page.reload();
  await page.getByRole("button", { name: "Journal" }).click();

  await expect(page.locator("#journalWonInput")).toHaveValue("I followed the plan.");
  await expect(page.locator("#journalAttackInput")).toHaveValue("I will start earlier.");
});

test("localStorage persistence covers goals, finance, journal, habits, and settings", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page, "Persist", "Command Center");
  await addMission(page, "Persistent mission", "Monday", true);
  await page.getByRole("button", { name: "Command Center" }).click();
  await page.locator("#habitList .habit-card").filter({ hasText: "Workout" }).locator("input").check();

  await page.getByRole("button", { name: "Finance" }).click();
  await addFinanceEntry(page, "Income", "321.45", "Persistent income");
  await addFinanceEntry(page, "Spending", "12.34", "Persistent spending");

  await page.getByRole("button", { name: "Journal" }).click();
  await page.fill("#journalWonInput", "Persistence works.");
  await page.fill("#journalAttackInput", "Reload and verify.");
  await page.reload();

  await expect(page.locator("#dashboardTitle")).toContainText("Persist's Command Center");
  await expect(page.locator("#goalList")).toContainText("Persistent mission");
  await expect(page.locator("#habitList .habit-card").filter({ hasText: "Workout" }).locator("input")).toBeChecked();

  await page.getByRole("button", { name: "Finance" }).click();
  await expect(page.locator("#madeThisMonthValue")).toContainText("$321.45");
  await expect(page.locator("#spentThisMonthValue")).toContainText("$12.34");

  await page.getByRole("button", { name: "Journal" }).click();
  await expect(page.locator("#journalWonInput")).toHaveValue("Persistence works.");
});

test("empty states return after deleting goals and finance data", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);
  await addMission(page, "Temporary mission", "Monday");

  await page.locator("#goalList .goal-card").filter({ hasText: "Temporary mission" }).getByText("Delete").click();
  await expect(page.locator("#goalList")).toContainText("No missions yet");

  await page.getByRole("button", { name: "Finance" }).click();
  await addFinanceEntry(page, "Spending", "9.99", "Temporary spending");
  await openFinanceSection(page, "Transaction History");
  await page.locator("#financeEntryList .finance-ledger-item").filter({ hasText: "Temporary spending" }).getByText("Delete").click();
  await expect(page.locator("#financeEntryList")).toContainText("No finance entries");
  await expect(page.locator("#spentThisMonthValue")).toContainText("$0");
});

test("mobile layout keeps tabs usable and important buttons visible", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile-only layout stress test.");

  await openFreshApp(page);
  await completeSetup(page);

  await expect(page.locator("#settingsBtn")).toBeVisible();
  await expect(page.locator("#scrollWeekBtn")).toBeVisible();
  await page.locator(".tab-button[data-tab='goals']").click();
  await expect(page.locator("#submitBtn")).toBeVisible();
  await expect(page.locator("#monthlyGoalSubmitBtn")).toBeVisible();
  await page.getByRole("button", { name: "Finance" }).click();
  await expect(page.locator("#importTransactionsBtn")).toBeVisible();
  await expect(page.locator("#financeSubmitBtn")).toBeVisible();
  await page.getByRole("button", { name: "Journal" }).click();
  await expect(page.locator("#journalWonInput")).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("long user text does not break layout", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  const longText = `Unbroken-${"X".repeat(260)}-symbols-!@#$%^&*()`;
  await addMission(page, longText, "Saturday");
  await page.getByRole("button", { name: "Finance" }).click();
  await addFinanceEntry(page, "Spending", "33.33", longText);
  await page.getByRole("button", { name: "Journal" }).click();
  await page.fill("#journalWonInput", longText);
  await page.getByRole("button", { name: "Command Center" }).click();

  await expectNoHorizontalOverflow(page);
  await page.getByRole("button", { name: "Finance" }).click();
  await expectNoHorizontalOverflow(page);
  await page.getByRole("button", { name: "Journal" }).click();
  await expectNoHorizontalOverflow(page);
});

test("Bible verse card must not ship placeholder text", async ({ page }) => {
  await openFreshApp(page);
  await completeSetup(page);

  await expect(page.locator("#bibleVerseText")).not.toContainText(/^RSVCE reading:/);
});
