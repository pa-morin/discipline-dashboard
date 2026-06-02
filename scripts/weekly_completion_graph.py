import os
import re
import sys
import tempfile
from pathlib import Path

LOG_FILE = Path("weekly_log.txt")
OUTPUT_FILE = Path("weekly_progress.png")
MPL_CONFIG_DIR = Path(tempfile.gettempdir()) / "weekly_goals_matplotlib"
TARGET_PERCENT = 80

# Set this to False if you want the graph saved without opening the PNG file.
AUTO_OPEN_ON_WINDOWS = True


def parse_weekly_percentages(log_file: Path) -> tuple[list[str], list[int]]:
    """
    Read weekly_log.txt and extract completed weekly scores.

    Returns:
        weeks: week labels for the x-axis
        percentages: completion percentages for the y-axis
    """
    weeks: list[str] = []
    percentages: list[int] = []

    if not log_file.exists():
        print(f'Could not find "{log_file}".')
        return weeks, percentages

    # Matches lines like:
    # Week of Feb 23 - Mar 1 | 100% (11/11)
    # Week of Mar 2 - 8      | 86% (12/14)
    pattern = re.compile(
        r"Week of\s+(?P<label>.+?)\s*\|\s*(?P<percent>\d{1,3})%\s*(?:\((?P<done>\d+)/(?P<total>\d+)\))?"
    )

    with log_file.open("r", encoding="utf-8", errors="replace") as file:
        for raw_line in file:
            line = raw_line.strip()

            # Only parse lines that actually contain a percentage.
            if "%" not in line:
                continue

            # Normalize dash variants so labels stay consistent.
            line = (
                line.replace("\u00e2\u20ac\u201c", "\u2013")
                .replace("\u00e2\u20ac\u201d", "\u2013")
                .replace("\u2014", "\u2013")
                .replace(" - ", " \u2013 ")
            )

            match = pattern.search(line)
            if not match:
                continue

            try:
                week_label = match.group("label").strip()
                percent = int(match.group("percent"))
            except (TypeError, ValueError):
                continue

            if not 0 <= percent <= 100:
                continue

            done_text = match.group("done")
            total_text = match.group("total")

            # Ignore incomplete/current week entries such as 0%.
            if percent == 0:
                continue

            if done_text is not None and total_text is not None:
                try:
                    done = int(done_text)
                    total = int(total_text)
                except ValueError:
                    continue

                if total == 0 or done > total:
                    continue

            weeks.append(week_label)
            percentages.append(percent)

    return weeks, percentages


def auto_open_image(image_path: Path) -> None:
    """Open the saved PNG on Windows if the option is enabled."""
    if not AUTO_OPEN_ON_WINDOWS or sys.platform != "win32":
        return

    try:
        os.startfile(str(image_path))  # type: ignore[attr-defined]
    except OSError:
        # Opening the file is optional, so ignore failures here.
        pass


def plot_weekly_completion(weeks: list[str], percentages: list[int]) -> None:
    """Create a cleaner weekly completion graph without changing the core behavior."""
    if not weeks or not percentages:
        print("No valid weekly completion data found to graph.")
        return

    try:
        MPL_CONFIG_DIR.mkdir(parents=True, exist_ok=True)
        os.environ.setdefault("MPLCONFIGDIR", str(MPL_CONFIG_DIR))
        import matplotlib.pyplot as plt
        import numpy as np
    except ImportError:
        print("Required packages are missing. Install them with: py -m pip install matplotlib numpy")
        return

    plt.style.use("seaborn-v0_8-whitegrid")

    x_positions = list(range(len(weeks)))

    # Green points hit the weekly target. Red points fell below it.
    point_colors = [
        "#1A9C5F" if value >= TARGET_PERCENT else "#D64545"
        for value in percentages
    ]

    # Add headroom so labels above 100% points are not cut off.
    max_percent = max(percentages)
    upper_limit = min(110, max(100, max_percent + 12))

    fig, ax = plt.subplots(figsize=(12, 6.5))
    fig.patch.set_facecolor("#F8FAFC")
    ax.set_facecolor("white")

    # Main weekly progress line.
    ax.plot(
        x_positions,
        percentages,
        color="#2F6BFF",
        linewidth=2.4,
        alpha=0.9,
        zorder=2,
    )

    # Draw the weekly points separately so they can be color-coded.
    ax.scatter(
        x_positions,
        percentages,
        s=95,
        c=point_colors,
        edgecolors="white",
        linewidths=1.8,
        zorder=3,
    )

    # Add a simple linear trend line to show the overall direction.
    if len(percentages) >= 2:
        trend_coefficients = np.polyfit(x_positions, percentages, 1)
        trend_line = np.poly1d(trend_coefficients)
        ax.plot(
            x_positions,
            trend_line(x_positions),
            color="#6B7280",
            linestyle="--",
            linewidth=1.8,
            alpha=0.9,
            label="Trend",
            zorder=1,
        )

    # Add the target reference line.
    ax.axhline(
        TARGET_PERCENT,
        color="#F59E0B",
        linestyle="--",
        linewidth=1.6,
        alpha=0.95,
        label="Target (80%)",
        zorder=0,
    )

    ax.set_title("Weekly Goal Completion", fontsize=17, pad=16, color="#111827")
    ax.set_xlabel("Week", fontsize=11, color="#374151", labelpad=10)
    ax.set_ylabel("Completion Percentage", fontsize=11, color="#374151", labelpad=10)
    ax.set_ylim(0, upper_limit)
    ax.set_xlim(-0.4, len(weeks) - 0.6 if len(weeks) > 1 else 0.4)
    ax.set_yticks(range(0, 101, 10))
    ax.set_xticks(x_positions)
    ax.set_xticklabels(weeks, rotation=35, ha="right")
    ax.tick_params(axis="x", labelsize=10, colors="#374151")
    ax.tick_params(axis="y", labelsize=10, colors="#374151")
    ax.grid(True, axis="y", linestyle="--", linewidth=0.7, alpha=0.45)
    ax.grid(False, axis="x")
    ax.set_axisbelow(True)
    ax.margins(x=0.03)

    # Light styling keeps the chart polished and uncluttered.
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["left"].set_color("#D1D5DB")
    ax.spines["bottom"].set_color("#D1D5DB")

    # Keep percentage labels above each point.
    for index, value in enumerate(percentages):
        ax.annotate(
            f"{value}%",
            (x_positions[index], value),
            textcoords="offset points",
            xytext=(0, 9),
            ha="center",
            fontsize=9.5,
            fontweight="semibold",
            color="#111827",
        )

    ax.legend(frameon=False, loc="upper right")
    plt.tight_layout(pad=1.5)

    # Save a fresh image every time the script runs.
    fig.savefig(OUTPUT_FILE, dpi=200, bbox_inches="tight")
    print(f'Graph saved as "{OUTPUT_FILE}".')

    auto_open_image(OUTPUT_FILE)
    plt.show()


def main() -> None:
    weeks, percentages = parse_weekly_percentages(LOG_FILE)
    plot_weekly_completion(weeks, percentages)


if __name__ == "__main__":
    main()
