
import { useLocation } from "react-router-dom"
import { byDateContext, onTodayContext, sinceContext } from "../../../types/plateProvider"
import { Section } from "../../atoms/Sections/Section"
import { NavBar } from "../navbar/Navbar"
import { HeaderStyled } from "./header.styled"
import { useDate } from "../../../Context/useDate"


export const Header = () => {
    const { day, month, setDay, setMonth} = useDate()
    const { pathname } = useLocation()
    const headerContext = pathname === "/bydate"
        ? byDateContext
        : pathname === "/since"
            ? sinceContext
            : onTodayContext

    const onSubmit = (e) => {
        e.preventDefault()
        setDay(e.target.day.value)
        setMonth(e.target.month.value)
    }

    return (
        <HeaderStyled>
            <Section>
                <div id="overallDiv">
                    <div id="forValue">
                        <h1>{headerContext.label}</h1>
                        {headerContext.value && (
                            <>
                            <form onSubmit={ onSubmit }>
                                <input type="text" name="day" />
                                <input type="text" name="month" />
                                <button>Send</button>
                            </form>
                            </>
                        )}
                    </div>
                    <p>{headerContext.description}</p>
                </div>
            </Section>
            <NavBar />
        </HeaderStyled>
    )
}