import { ButtonBaseClassNameContract as AccentButtonClassNameContract } from "@microsoft/fast-components-class-name-contracts-msft";
import { ComponentStyles } from "@microsoft/fast-jss-manager";
import { applyFocusVisible, format } from "@microsoft/fast-jss-utilities";
import { DesignSystem } from "../design-system";
import { baseButton, buttonStyles } from "../patterns/button";
import {
    accentFillActive,
    accentFillHover,
    accentFillRest,
    accentForegroundCut,
    neutralFocus,
    neutralFocusInnerAccent,
} from "../utilities/color";
import {
    highContrastAccent,
    highContrastDisabledBorder,
    highContrastDisabledForeground,
    highContrastDoubleFocus,
    highContrastHighlightForeground,
    highContrastLinkBorder,
    highContrastLinkForeground,
    highContrastLinkOutline,
    highContrastSelectedForeground,
    highContrastSelectedOutline,
    highContrastSelector,
} from "../utilities/high-contrast";

const styles: ComponentStyles<AccentButtonClassNameContract, DesignSystem> = {
    ...baseButton,
    button: {
        ...buttonStyles(),
        color: accentForegroundCut,
        fill: accentForegroundCut,
        background: accentFillRest,
        "&:hover:enabled": {
            background: accentFillHover,
            ...highContrastSelectedOutline,
            "& $button_beforeContent, & $button_afterContent": {
                ...highContrastHighlightForeground,
            },
        },
        "&:active:enabled": {
            background: accentFillActive,
        },
        ...applyFocusVisible<DesignSystem>({
            "border-color": neutralFocus,
            "box-shadow": format(
                "0 0 0 2px inset {0}",
                neutralFocusInnerAccent(accentFillRest)
            ),
            ...highContrastDoubleFocus,
        }),
        "&:disabled": {
            ...highContrastDisabledBorder,
            "& $button_beforeContent, & $button_afterContent": {
                ...highContrastDisabledForeground,
            },
        },
        "& $button_beforeContent, & $button_afterContent": {
            fill: accentForegroundCut,
            ...highContrastSelectedForeground,
        },
        ...highContrastAccent,
        "a&": {
            ...highContrastLinkOutline,
            "& $button_beforeContent, & $button_afterContent": {
                ...highContrastLinkForeground,
            },
            "&:hover:enabled": {
                ...highContrastLinkBorder,
                "& $button_beforeContent, & $button_afterContent": {
                    ...highContrastHighlightForeground,
                },
            },
            "&$button__disabled": {
                ...highContrastDisabledBorder,
                "& $button_beforeContent, & $button_afterContent": {
                    ...highContrastDisabledForeground,
                },
                "&:hover": {
                    [highContrastSelector]: {
                        "box-shadow": "none"
                    }
                }
            },
        },
    },
};

export default styles;
