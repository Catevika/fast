import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import {
    accentForegroundActiveBehavior,
    heightNumber,
    neutralForegroundRestBehavior,
} from "../styles/index";

export const CalendarStyles = css`
    ${display("block")} :host {
        --cell-border: none;
        --cell-height: calc(${heightNumber} * 1px);
        --weekday-background: transparent;
        --weekday-color: inherit;
        --current-day: ${accentForegroundActiveBehavior.var};
        --current-day-border: none;
        --current-day-background: none;
        --inactive-day-color: ${SystemColors.GrayText};
    }

    .days > data-grid-row {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        border-left: var(--cell-border);
    }

    .title {
        font-size: 1.5em;
        padding: 5px 0;
        text-align: center;
    }

    .week-day {
        background-color: var(--weekday-background);
        border-bottom: var(--cell-border);
        color: var(--weekday-color);
        padding: 5px 0;
        text-align: center;
    }

    .week-day:nth-child(7) {
        border-right: var(--cell-border);
    }

    .day {
        box-sizing: border-box;
        height: var(--cell-height);
        padding: 5px;
        vertical-align: top;
        border-bottom: var(--cell-border);
        border-right: var(--cell-border);
    }

    .day.off {
        color: var(--inactive-day-color);
    }

    .today {
        background: var(--current-day-background);
        color: var(--current-day);
        outline: var(--current-day-border);
        outline-offset: -1px;
    }
`.withBehaviors(accentForegroundActiveBehavior, neutralForegroundRestBehavior);
