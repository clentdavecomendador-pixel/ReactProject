import { NavLink } from "react-router-dom"
import { NavBarStyled } from "./navbar.styled"
import { HeaderLogo } from "../../modules/headerlogo/headerLogo"
import { Settings } from "../../modules/settings/setting"

export const NavBar = () => {
    return(
        <NavBarStyled>
            <HeaderLogo />
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/countries">Countries</NavLink></li>
                <li><NavLink to="/cities">Cities</NavLink></li>
                <li><NavLink to="/places">Places</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
            </ul>
            <Settings />
        </NavBarStyled>
    )
}