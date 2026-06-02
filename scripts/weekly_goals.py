import json
import os
from datetime import datetime, timedelta

DATA_FILE = "goals.json"

LOG_FILE = "weekly_log.txt"


# ---------- Date helpers ----------

def _today() -> datetime:
    return datetime.now()

def _today_ymd() -> str:
    return _today().strftime("%Y-%m-%d")

def _monday_of_current_week_ymd() -> str:
    # Monday = 0 ... Sunday = 6
    t = _today()
    monday = t - timedelta(days=t.weekday())
    return monday.strftime("%Y-%m-%d")


# ---------- Data helpers ----------

def _default_data() -> dict:
    return {
        "current_week": {
            "start_date": _monday_of_current_week_ymd(),
            "goals": []
        },
        "history": []
    }

def save_data(data: dict) -> None:
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def persist_data(data: dict) -> None:
    save_data(data)
    write_clean_log(data)

def load_data() -> dict:
    """
    Loads data from goals.json.
    Handles:
      - Missing file
      - Corrupt/empty file
      - Old format: a LIST of goals (migrates to new dict format)
      - Partially missing keys
    """
    if not os.path.exists(DATA_FILE):
        data = _default_data()
        persist_data(data)
        return data

    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            raw = json.load(f)
    except Exception:
        data = _default_data()
        persist_data(data)
        return data

    # OLD FORMAT: list of goals
    if isinstance(raw, list):
        data = _default_data()
        for g in raw:
            if isinstance(g, dict) and "text" in g:
                data["current_week"]["goals"].append({
                    "text": str(g.get("text", "")).strip(),
                    "done": bool(g.get("done", False)),
                    "created_at": str(g.get("created_at", _today_ymd())),
                    "done_at": g.get("done_at", None)
                })
        persist_data(data)
        return data

    if not isinstance(raw, dict):
        data = _default_data()
        persist_data(data)
        return data

    # Ensure structure
    if "current_week" not in raw or not isinstance(raw["current_week"], dict):
        raw["current_week"] = _default_data()["current_week"]
    if "history" not in raw or not isinstance(raw["history"], list):
        raw["history"] = []

    cw = raw["current_week"]
    if "start_date" not in cw or not isinstance(cw["start_date"], str):
        cw["start_date"] = _monday_of_current_week_ymd()
    if "goals" not in cw or not isinstance(cw["goals"], list):
        cw["goals"] = []

    # Normalize goals
    normalized = []
    for g in cw["goals"]:
        if isinstance(g, dict) and "text" in g:
            normalized.append({
                "text": str(g.get("text", "")).strip(),
                "done": bool(g.get("done", False)),
                "created_at": str(g.get("created_at", _today_ymd())),
                "done_at": g.get("done_at", None)
            })
    cw["goals"] = normalized

    # Normalize history so older entries still render missed-goal details cleanly.
    normalized_history = []
    for week in raw["history"]:
        if not isinstance(week, dict):
            continue

        start_date = str(week.get("start_date", _monday_of_current_week_ymd()))
        week_goals = []
        for g in week.get("goals", []):
            if isinstance(g, dict) and "text" in g:
                week_goals.append({
                    "text": str(g.get("text", "")).strip(),
                    "done": bool(g.get("done", False)),
                    "created_at": str(g.get("created_at", start_date)),
                    "done_at": g.get("done_at", None)
                })

        completed = sum(1 for g in week_goals if g["done"])
        total = len(week_goals)

        normalized_history.append({
            "week": str(week.get("week", week_label(start_date))),
            "start_date": start_date,
            "end_date": str(week.get("end_date", start_date)),
            "score": int(week.get("score", score_percent(week_goals) if week_goals else 0)),
            "completed": int(week.get("completed", completed)),
            "total": int(week.get("total", total)),
            "goals": week_goals
        })

    raw["history"] = normalized_history

    save_data(raw)
    return raw


# ---------- Display / scoring ----------

def week_label(start_date_str: str) -> str:
    start = datetime.strptime(start_date_str, "%Y-%m-%d")
    end = start + timedelta(days=6)

    # If the week crosses months, show both months
    if start.month != end.month or start.year != end.year:
        return f"Week of {start.strftime('%b')} {start.day} – {end.strftime('%b')} {end.day}"
    else:
        return f"Week of {start.strftime('%b')} {start.day} – {end.day}"

def score_percent(goals: list[dict]) -> int:
    if not goals:
        return 0
    done = sum(1 for g in goals if g["done"])
    return int(round((done / len(goals)) * 100))

def missed_goals(goals: list[dict]) -> list[str]:
    return [g["text"] for g in goals if not g["done"]]

def show_history_details(week: dict) -> None:
    print("\n" + "-" * 50)
    print(week["week"])
    print("-" * 50)
    print(f"Score: {week['score']}%  |  {week['completed']}/{week['total']}")

    missed = missed_goals(week.get("goals", []))
    if missed:
        print("\nMissed goals:")
        for i, goal_text in enumerate(missed, 1):
            print(f"{i}. {goal_text}")
    else:
        print("\nMissed goals: none")

    print("-" * 50 + "\n")

def show_current_week(data: dict) -> None:
    goals = data["current_week"]["goals"]
    start_date = data["current_week"]["start_date"]
    label = week_label(start_date)

    print("\n" + "-" * 50)
    print(label)
    print("-" * 50)

    if not goals:
        print("No goals yet.")
        print("-" * 50 + "\n")
        return

    for i, g in enumerate(goals, 1):
        box = "x" if g["done"] else " "
        print(f"{i}. [{box}] {g['text']}")

    completed = sum(1 for g in goals if g["done"])
    total = len(goals)
    percent = score_percent(goals)

    print("-" * 50)
    print(f"{completed}/{total} completed  |  {percent}%")
    print("-" * 50 + "\n")


# ---------- Input parsing for import ----------

def _strip_leading_markers(s: str) -> tuple[str, bool]:
    """
    Cleans StickyNotes-style lines.
    Returns (clean_text, done_flag).
    Recognizes:
      - [x] / [ ] / (x)
      - leading x / ✓
      - bullets: -, *, •
      - numbered: "1.", "2)"
    """
    s = s.strip()
    if not s:
        return "", False

    done = False
    lower = s.lower()

    # checkbox-like
    if lower.startswith("[x]") or lower.startswith("[✓]"):
        done = True
        s = s[3:].strip()
    elif lower.startswith("[ ]"):
        s = s[3:].strip()

    # leading done marker
    if s.startswith("✓"):
        done = True
        s = s[1:].strip()
    if lower.startswith("x "):
        done = True
        s = s[2:].strip()

    # bullets
    for bullet in ("•", "-", "*"):
        if s.startswith(bullet):
            s = s[1:].strip()
            break

    # numbered like "1." or "1)"
    if len(s) >= 2 and s[0].isdigit():
        if s[1] in (".", ")"):
            s = s[2:].strip()
        elif len(s) >= 3 and s[1].isdigit() and s[2] in (".", ")"):
            s = s[3:].strip()

    return s, done


# ---------- Actions ----------

def add_goal(data: dict) -> None:
    text = input("Enter your goal: ").strip()
    if not text:
        print("Goal cannot be empty.\n")
        return

    goal = {"text": text, "done": False, "created_at": _today_ymd(), "done_at": None}
    data["current_week"]["goals"].append(goal)
    persist_data(data)
    print("✓ Goal added.\n")

def import_goals(data: dict) -> None:
    print("\nPaste your goals (one per line).")
    print("When you’re done, press ENTER on an empty line.\n")

    lines = []
    while True:
        line = input()
        if line.strip() == "":
            break
        lines.append(line)

    if not lines:
        print("\nNo lines pasted.\n")
        return

    added = 0
    for line in lines:
        text, done = _strip_leading_markers(line)
        if not text:
            continue
        goal = {
            "text": text,
            "done": done,
            "created_at": _today_ymd(),
            "done_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S") if done else None
        }
        data["current_week"]["goals"].append(goal)
        added += 1

    persist_data(data)
    print(f"\n✓ Imported {added} goals.\n")

def _pick_goal_index(goals: list[dict], prompt: str):
    if not goals:
        print("No goals yet.\n")
        return None
    try:
        n = int(input(prompt).strip())
        idx = n - 1
        if 0 <= idx < len(goals):
            return idx
        print("Invalid goal number.\n")
        return None
    except ValueError:
        print("Please enter a number.\n")
        return None

def complete_goal(data: dict) -> None:
    goals = data["current_week"]["goals"]
    show_current_week(data)

    if not goals:
        return

    raw = input("Enter goal numbers to complete (ex: 1 3 5 or 1,3,5): ").strip()

    if not raw:
        return

    # allow commas or spaces
    raw = raw.replace(",", " ")
    parts = raw.split()

    updated = 0

    for part in parts:
        if part.isdigit():
            idx = int(part) - 1
            if 0 <= idx < len(goals):
                if not goals[idx]["done"]:
                    goals[idx]["done"] = True
                    goals[idx]["done_at"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    updated += 1

    if updated > 0:
        persist_data(data)
        print(f"✓ Marked {updated} goal(s) complete.")
        print(f"Score is now {score_percent(goals)}%.\n")
    else:
        print("No valid goals updated.\n")

def undo_goal(data: dict) -> None:
    goals = data["current_week"]["goals"]
    show_current_week(data)
    idx = _pick_goal_index(goals, "Which goal # do you want to undo? ")
    if idx is None:
        return
    goals[idx]["done"] = False
    goals[idx]["done_at"] = None
    persist_data(data)
    print("✓ Marked as incomplete.\n")

def delete_goal(data: dict) -> None:
    goals = data["current_week"]["goals"]
    show_current_week(data)
    idx = _pick_goal_index(goals, "Which goal # do you want to delete? ")
    if idx is None:
        return
    removed = goals.pop(idx)
    persist_data(data)
    print(f"✓ Deleted: {removed['text']}\n")

def view_score(data: dict) -> None:
    goals = data["current_week"]["goals"]
    if not goals:
        print("\nNo goals yet. Score is 0%.\n")
        return
    completed = sum(1 for g in goals if g["done"])
    pct = score_percent(goals)
    print(f"\nScore: {completed}/{len(goals)} completed  |  {pct}%\n")

def import_missed_from_previous_week(data: dict) -> None:
    hist = data["history"]
    if not hist:
        print("\nNo previous week found yet.\n")
        return

    previous_week = hist[-1]
    missed = missed_goals(previous_week.get("goals", []))
    if not missed:
        print(f"\nNo missed goals in {previous_week['week']}.\n")
        return

    current_goals = data["current_week"]["goals"]
    existing_texts = {g["text"].strip().casefold() for g in current_goals}

    added = 0
    skipped = 0

    for goal_text in missed:
        normalized_text = goal_text.strip()
        if not normalized_text:
            skipped += 1
            continue

        if normalized_text.casefold() in existing_texts:
            skipped += 1
            continue

        current_goals.append({
            "text": normalized_text,
            "done": False,
            "created_at": _today_ymd(),
            "done_at": None
        })
        existing_texts.add(normalized_text.casefold())
        added += 1

    persist_data(data)

    print(f"\nPulled missed goals from {previous_week['week']}.")
    print(f"Added {added} goal(s).")
    if skipped:
        print(f"Skipped {skipped} duplicate/blank goal(s).")
    print("")

def end_week_and_archive(data: dict) -> None:
    goals = data["current_week"]["goals"]
    if not goals:
        print("\nNo goals to archive.\n")
        return

    start_date = data["current_week"]["start_date"]
    start = datetime.strptime(start_date, "%Y-%m-%d")
    end = start + timedelta(days=6)

    done = sum(1 for g in goals if g["done"])
    pct = score_percent(goals)

    archived = {
        "week": week_label(start_date),
        "start_date": start_date,
        "end_date": end.strftime("%Y-%m-%d"),
        "score": pct,
        "completed": done,
        "total": len(goals),
        "goals": [g.copy() for g in goals]
    }
    data["history"].append(archived)

    new_start = (start + timedelta(days=7)).strftime("%Y-%m-%d")
    data["current_week"] = {"start_date": new_start, "goals": []}

    persist_data(data)

    print("\nWeek archived.")
    print(f"Final: {pct}% ({done}/{archived['total']})")
    print("New week started.\n")

def view_history(data: dict) -> None:
    hist = data["history"]
    if not hist:
        print("\nNo history yet.\n")
        return

    while True:
        print("\nHistory:")
        for i, w in enumerate(hist, 1):
            missed_count = len(missed_goals(w.get("goals", [])))
            print(
                f"{i}. {w['week']}  |  {w['score']}%  |  {w['completed']}/{w['total']}  |  "
                f"{missed_count} missed"
            )

        avg = sum(w["score"] for w in hist) / len(hist)
        print(f"\nAverage score: {avg:.1f}%")
        raw = input("Enter a week number to view missed goals, or press ENTER to go back: ").strip()

        if not raw:
            print("")
            return

        if raw.isdigit():
            idx = int(raw) - 1
            if 0 <= idx < len(hist):
                show_history_details(hist[idx])
                continue

        print("Invalid week number.\n")


# ---------- Main loop ----------

def write_clean_log(data: dict) -> None:
    lines = []

    # Current week
    start_date = data["current_week"]["start_date"]
    label = week_label(start_date)
    goals = data["current_week"]["goals"]

    lines.append(label)
    for i, g in enumerate(goals, 1):
        box = "x" if g["done"] else " "
        lines.append(f"{i}. [{box}] {g['text']}")

    completed = sum(1 for g in goals if g["done"])
    total = len(goals)
    pct = score_percent(goals) if total else 0
    lines.append(f"{completed}/{total} completed | {pct}%")
    lines.append("")

    # History summary
    lines.append("--- History ---")
    if not data["history"]:
        lines.append("(none yet)")
    else:
        for w in data["history"]:
            lines.append(f"{w['week']}  |  {w['score']}% ({w['completed']}/{w['total']})")
        lines.append("")
        lines.append("Open the app and choose View history to inspect missed goals for a specific week.")

    with open(LOG_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

def main():
    data = load_data()
    write_clean_log(data)

    while True:
        print("1) View current goals")
        print("2) Add goal")
        print("3) Check off goal")
        print("4) Undo goal")
        print("5) Delete goal")
        print("6) View weekly score")
        print("7) End week & archive")
        print("8) View history")
        print("9) Import/paste multiple goals")
        print("10) Add missed goals from previous week")
        print("0) Exit")

        choice = input("Select: ").strip()

        if choice == "1":
            show_current_week(data)
        elif choice == "2":
            add_goal(data)
        elif choice == "3":
            complete_goal(data)
        elif choice == "4":
            undo_goal(data)
        elif choice == "5":
            delete_goal(data)
        elif choice == "6":
            view_score(data)
        elif choice == "7":
            end_week_and_archive(data)
        elif choice == "8":
            view_history(data)
        elif choice == "9":
            import_goals(data)
        elif choice == "10":
            import_missed_from_previous_week(data)
        elif choice == "0":
            print("Goodbye.\n")
            break
        else:
            print("Invalid option.\n")

        data = load_data()
        write_clean_log(data)


if __name__ == "__main__":
    main()
