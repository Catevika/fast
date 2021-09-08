import { css, ElementStyles } from "@microsoft/fast-element";
import {
    display,
    ElementDefinitionContext,
    forcedColorsStylesheetBehavior,
    FoundationElementDefinition,
} from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import { elevationShadowFlyout } from "../styles/index";
import {
    controlCornerRadius,
    designUnit,
    fillColor,
    layerCornerRadius,
    neutralForegroundRest,
    neutralStrokeDividerRest,
    strokeWidth,
} from "../design-tokens";

export const menuStyles: (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => ElementStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) =>
    css`
        ${display("block")} :host {
            background: ${fillColor};
            border: calc(${strokeWidth} * 1px) solid transparent;
            border-radius: ${layerCornerRadius};
            box-shadow: ${elevationShadowFlyout};
            margin: 0;
            border-radius: calc(${controlCornerRadius} * 1px);
            padding: calc(${designUnit} * 1px) 0;
            max-width: 368px;
            min-width: 64px;
            color: ${neutralForegroundRest};
        }
        :host([slot="submenu"]) {
            width: max-content;
            margin: 0 calc(${designUnit} * 2px);
        }
        ::slotted(hr) {
            box-sizing: content-box;
            height: 0;
            margin: calc(${designUnit} * 1px) 0;
            border: none;
            border-top: calc(${strokeWidth} * 1px) solid ${neutralStrokeDividerRest};
        }
    `.withBehaviors(
        forcedColorsStylesheetBehavior(
            css`
                :host {
                    background: ${SystemColors.Canvas};
                    border-color: ${SystemColors.CanvasText};
                }
            `
        )
    );
