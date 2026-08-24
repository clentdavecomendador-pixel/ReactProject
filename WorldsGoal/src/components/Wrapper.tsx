import type { WrapperProps } from "../types/types"

export const Wrapper = ( props: WrapperProps) => {
    return <div className="wrapper">{props.children}</div>
}