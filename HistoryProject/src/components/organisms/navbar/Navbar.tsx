import { NavLink } from "react-router-dom"
import { NavbarStyled } from "./NavBar.styled"

export const NavBar = () => {
    return(
        <NavbarStyled>
            <ul>
                <li><NavLink to="/since">since</NavLink></li>
                <li><NavLink to="/">today</NavLink></li>
                <li><NavLink to="/bydate">by date</NavLink></li>
            </ul>
        </NavbarStyled>
    )
}