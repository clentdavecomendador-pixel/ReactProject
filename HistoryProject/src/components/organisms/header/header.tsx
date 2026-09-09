
import { onTodayContext } from "../../../types/plateProvider"
import { Section } from "../../atoms/Sections/Section"
import { NavBar } from "../navbar/Navbar"
import { HeaderStyled } from "./header.styled"

export const Header = () => {
    return (
        <HeaderStyled>
            <Section>
                <div>
                    <h1>{onTodayContext.label}</h1>
                    <p>{onTodayContext.description}</p>
                </div>
            </Section>
            <NavBar />
        </HeaderStyled>
    )
}