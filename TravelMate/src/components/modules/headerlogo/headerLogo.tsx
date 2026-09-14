import { Logo } from "../../../assets/Logo"
import { HeaderLogoStyled } from "./headerLogo.styled"

export const HeaderLogo = () => {
    return(
        <HeaderLogoStyled>
        <Logo />
        <div>
            <p>Travel</p>
            <p id="mate">Mate</p>
        </div>
    </HeaderLogoStyled>
    )
}