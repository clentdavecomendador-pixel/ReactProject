import type { NavbarProps } from "../../../types/types"

export const Navbar = ({padding, margin,display, justifyContent, alignItems, children}: NavbarProps) => {
    const NavbarStyle = {
        padding: `${padding}px`,
        margin: `${margin}px`,
        display: `${display}`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`
    }
    return (
        <nav style={NavbarStyle}>
            {children}
        </nav>
    )
};

export const Ul = ({padding, margin, display, justifyContent, alignItems, children}: NavbarProps) => {
    const UlStyle = {
        padding: `${padding}px`,
        margin: `${margin}px`,
        display: `${display}`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`
    }
    return (
        <ul style={UlStyle}>
            {children}
        </ul>
    )
}