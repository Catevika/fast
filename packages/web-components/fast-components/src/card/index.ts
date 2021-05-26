import {
    DI,
    Card as FoundationCard,
    CardTemplate as template,
} from "@microsoft/fast-foundation";
import { fillColor, NeutralFillCard } from "../design-tokens";
import { CardStyles as styles } from "./card.styles";

function parentElement(element: HTMLElement): HTMLElement | null {
    if (element.parentElement) {
        return element.parentElement;
    }

    if (
        element.parentNode &&
        element.parentNode instanceof ShadowRoot &&
        element.parentNode.host instanceof HTMLElement
    ) {
        return element.parentNode.host;
    }

    return null;
}
/**
 * @internal
 */
export class Card extends FoundationCard {
    connectedCallback() {
        super.connectedCallback();
        const parent = parentElement(this);

        fillColor.setValueFor(this, (target: HTMLElement) => {
            return DI.findParentContainer(target).get(NeutralFillCard)(
                target,
                fillColor.getValueFor(parent || this)
            );
        });
    }
}

/**
 * The FAST Card Element. Implements {@link @microsoft/fast-foundation#Card},
 * {@link @microsoft/fast-foundation#CardTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fast-card\>
 */
export const fastCard = Card.compose({
    baseName: "card",
    template,
    styles,
});

/**
 * Styles for Card
 * @public
 */
export const cardStyles = styles;
