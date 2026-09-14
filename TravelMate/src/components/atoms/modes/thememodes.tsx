import { DarkMode } from "./icons/darkmode"
import { LightMode } from "./icons/lightmode"
import { ThemeModesStyled } from "./thememodes.styled"


export const ThemeModes = () => {
    return(
        <ThemeModesStyled>
            <button><DarkMode />Dark</button>
            <button><LightMode />Light</button>
        </ThemeModesStyled>
    )
}