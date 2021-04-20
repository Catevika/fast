import { html, when } from "@microsoft/fast-element";
import type { ViewTemplate } from "@microsoft/fast-element";
import type { AnchoredRegion } from "./anchored-region";

/**
 * The template for the {@link @microsoft/fast-foundation#(AnchoredRegion:class)} component.
 * @beta
 */
export const anchoredRegionTemplate: (
    context,
    definition
) => ViewTemplate<AnchoredRegion> = (context, definition) => html`
    <template class="${x => (x.initialLayoutComplete ? "loaded" : "")}">
        ${when(
            x => x.initialLayoutComplete,
            html<AnchoredRegion>`
                <slot></slot>
            `
        )}
    </template>
`;
