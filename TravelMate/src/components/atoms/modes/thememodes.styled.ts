import styled from "styled-components";
import { Reset } from "../../../styles/resest";

export const ThemeModesStyled = styled.div`
${Reset}
    .theme-switch{
        position: relative;
        width: 4rem;
        height:2rem;
        padding: 0;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        background: var(--text-color);
    }
    
    .icon{
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
        
        width: 1.5rem;
        height: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        background: var(--background-color);
        color: var(--text-color);

        transition: transform 0.3s ease;
    }
    
    .theme-switch.dark{
        .icon{
            transform: translateX(2rem);
        }
    }
`