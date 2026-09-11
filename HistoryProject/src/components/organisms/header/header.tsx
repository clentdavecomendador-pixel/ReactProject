
import { useLocation } from "react-router-dom"
import { byDateContext, onTodayContext, sinceContext } from "../../../types/plateProvider"
import { Section } from "../../atoms/Sections/Section"
import { NavBar } from "../navbar/Navbar"
import { HeaderStyled } from "./header.styled"
import { useDate } from "../../../Context/useDate"
import { SelectDate } from "../../molecules/SelectDate/SelectDate"
import { SelectMonth } from "../../molecules/SelectMonth/SelectMonth"

export const Header = () => {
    const { setDay, setMonth } = useDate()
    const { pathname } = useLocation()
    const headerContext = pathname === "/bydate"
        ? byDateContext
        : pathname === "/since"
            ? sinceContext
            : onTodayContext

    return (
        <HeaderStyled>
            <Section>
                <div id="overallDiv">
                    <div id="forValue">
                        <h1>{headerContext.label}</h1>
                        {headerContext.value && (
                            // <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                            <>
                            <SelectDate onChange={ (e) => setDay(e.target.value) }/>
                            <SelectMonth onChange={ (e) => setMonth(e.target.value) }/>
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