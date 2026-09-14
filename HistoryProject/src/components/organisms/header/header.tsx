
import { useLocation } from "react-router-dom"
import { byDateContext, onTodayContext, sinceContext } from "../../../types/plateProvider"
import { Section } from "../../atoms/Sections/Section"
import { NavBar } from "../navbar/Navbar"
import { HeaderStyled } from "./header.styled"
import { useDate } from "../../../Context/useDate"


export const Header = () => {
    const { setDay, setMonth, setYear } = useDate()
    const { pathname } = useLocation()
    const headerContext = pathname === "/bydate"
        ? byDateContext
        : pathname === "/since"
            ? sinceContext
            : onTodayContext

    const isValidMonth = (value: string) => {
        const month = Number(value)
        return /^\d+$/.test(value) && month >= 1 && month <= 12
    }

    const isValidDay = (value: string, monthValue: string) => {
        const day = Number(value)
        const month = Number(monthValue)

        if (!/^\d+$/.test(value) || day < 1 || day > 31) {
            return false
        }

        const maxDayInMonth = new Date(2024, month, 0).getDate()
        return day <= maxDayInMonth
    }

    const isValidYear = (value: string) => {
        const year = Number(value)
        const currentYear = new Date().getFullYear()

        return /^\d+$/.test(value) && year >= 1 && year <= currentYear
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        if (pathname === "/since") {
            const yearValue = form.year.value

            if (!isValidYear(yearValue)) {
                alert(`Please enter a valid year between 1 and ${new Date().getFullYear()}.`)
                return
            }

            setYear(yearValue)
            return
        }

        const dayValue = form.day.value
        const monthValue = form.month.value

        if (!isValidMonth(monthValue) || !isValidDay(dayValue, monthValue)) {
            alert("Please enter a valid month and day (for example 12 and 31).")
            return
        }

        setDay(dayValue)
        setMonth(monthValue)
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
                                {pathname === "/since" ? (
                                    <input
                                        type="number"
                                        name="year"
                                        min={1}
                                        max={new Date().getFullYear()}
                                        placeholder="year"
                                        inputMode="numeric"
                                    />
                                ) : (
                                    <>
                                        <input
                                            type="number"
                                            name="day"
                                            min={1}
                                            max={31}
                                            placeholder="day"
                                            inputMode="numeric"
                                        />
                                        <input
                                            type="number"
                                            name="month"
                                            min={1}
                                            max={12}
                                            placeholder="month"
                                            inputMode="numeric"
                                        />
                                    </>
                                )}
                                <button type="submit">Send</button>
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