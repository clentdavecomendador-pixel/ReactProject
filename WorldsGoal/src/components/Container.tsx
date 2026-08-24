
import type { ContainerProps } from "../types/types";


export const Container = ({
    margin,
    padding,
    height,
    bgColor, 
    children
}: ContainerProps) => {
    const containerStyle = {
        margin: `${margin}px`,
        padding: `${padding}px`,
        height: `${height}%`,
        backgroundColor: bgColor
    }
    return (
        <div style={containerStyle}>
            {children}
        </div>
    );
};