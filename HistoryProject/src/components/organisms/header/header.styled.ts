import styled from "styled-components";
import { Reset } from "../../../styles/reset";
import HeaderBackground from "../../../assets/headerbckgrnd.jpg"

export const HeaderStyled = styled.header`
${Reset}
color: #C7BD8D;
font-family: "Linden Hill", serif;

section {
    #overallDiv {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 2rem;
        background-color: #1F1F1F;
        border: 10px solid #695E48;

        #forValue {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;

            h1 {
                font-family: "LimeLight", sans-serif;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                margin: 0;
            }

            form {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                flex-wrap: wrap;
                justify-content: center;
            }

            input,
            button {
                font-family: "LimeLight", sans-serif;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                background: rgba(199, 189, 141, 0.08);
                color: #C7BD8D;
                border: 2px solid #695E48;
                border-radius: 0.5rem;
                padding: 0.6rem 0.9rem;
                font-size: 0.9rem;
                min-height: 2.75rem;
            }

            input {
                width: 7rem;
                text-align: center;
            }

            input:focus {
                outline: 2px solid #C7BD8D;
                outline-offset: 2px;
            }

            button {
                cursor: pointer;
                transition: transform 0.2s ease, background 0.2s ease;
            }

            button:hover {
                background: rgba(199, 189, 141, 0.18);
                transform: translateY(-1px);
            }
        }
    }

    background-image: url(${HeaderBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 5rem 3rem;
}
`