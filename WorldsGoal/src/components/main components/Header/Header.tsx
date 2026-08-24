import type { HeaderProps } from "../../../types/types";

export const Header = ({padding, bgColor, children}: HeaderProps) => {
    const headerStyle = {
        padding: `${padding}px`,
        backgroundColor: `${bgColor}`
    }
    return (
        <header style={headerStyle}>
            {children}
        </header>
    )
};