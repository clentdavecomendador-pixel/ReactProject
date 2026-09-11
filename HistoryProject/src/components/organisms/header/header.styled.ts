import styled from "styled-components";
import { Reset } from "../../../styles/reset";
import HeaderBackground from "../../../assets/headerbckgrnd.jpg"

export const HeaderStyled = styled.header`
${Reset}
color: #C7BD8D;
font-family: "Linden Hill", serif;
    section{
        #overallDiv{
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 2rem;
            background-color: #1F1F1F;
            border: 10px solid #695E48;
            #forValue{
                display: flex;
                    h1{
                        font-family: "LimeLight", sans-serif;
                    }
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