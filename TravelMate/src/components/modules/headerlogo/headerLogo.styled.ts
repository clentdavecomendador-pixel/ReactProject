import styled from "styled-components";
import { Reset } from "../../../styles/resest";

export const HeaderLogoStyled = styled.div`
  ${Reset}
  display: flex;
  align-items: center;
  font-weight: 550;

  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  p {
    margin: 0;
    font-size: 3.5rem;
  }
  #mate {
  color: #0E68ED;
  }
`;