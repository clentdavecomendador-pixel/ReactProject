import { useEffect, useState } from "react"
import { DarkMode } from "./icons/darkmode"
import { LightMode } from "./icons/lightmode"
import { ThemeModesStyled } from "./thememodes.styled"


export const ThemeModes = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode)

        return () => document.body.classList.remove("dark-mode")
    }, [darkMode])

    return(
        <ThemeModesStyled>
            <button
                className={`theme-switch ${darkMode ? "dark" : "light"}`}
                onClick={() => setDarkMode(!darkMode)}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                type="button"
            >
                <span className="icon">
                    {darkMode ? <DarkMode /> : <LightMode />}
                </span>
            </button>
        </ThemeModesStyled>
    )
}