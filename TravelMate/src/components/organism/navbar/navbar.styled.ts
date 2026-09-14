import styled from "styled-components";
import { Reset } from "../../../styles/resest";

export const NavBarStyled = styled.nav`
${Reset}
display: flex;
justify-content: space-between;
align-items: center;
    ul{
     display:flex;
     gap: 1rem;
     font-size: 1.5rem;
        li{
         display:flex;
            a{
             text-decoration: none;
             color: #05173D;
             padding: 1rem;
                &:hover, &.active{
                 color: #0E68ED;
                 background-color:#E9F4FD;
                 border-radius: 2rem;
                }
            }
        }
    }
`