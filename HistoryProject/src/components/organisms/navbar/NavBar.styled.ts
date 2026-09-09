import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const NavbarStyled = styled.nav`
ul {
 ${Reset}
 display: flex;
 flex-direction: column;
 text-align: center;
 align-items: center;
 justify-content: center;
 gap: 10px;
    li{
     display: flex;
     justify-content: center;
        a{
         display: block;
         text-transform: uppercase;
         text-decoration: none;
         color: #C7BD8D;
         font-size: 23px;
         margin: 10px;
         &:hover, &.active{
                text-decoration: underline;
                font-weight: 600;
                color: #FFF5C2;
            }
        }
    }
}
`