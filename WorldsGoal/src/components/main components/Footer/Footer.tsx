import type { FooterProps } from "../../../types/types";

export const Footer = ({padding, margin, display, justifyContent ,children}: FooterProps) => {
    const FooterStyle = {
        padding: `${padding}px`,
        margin: `${margin}px`,
        display: `${display}`,
        justifyContent: `${justifyContent}`,
    }
    return (
        <footer style={FooterStyle}>
            {children}
        </footer>
    )
};