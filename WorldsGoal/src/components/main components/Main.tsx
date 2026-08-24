import type { MainProps } from "../../types/types";

export const Main = ({padding, children}: MainProps) => {
    const mainStyle = {
        padding: `${padding}px`
    }
    return (
       <main style={mainStyle}>
        {children}
       </main>
    )
};