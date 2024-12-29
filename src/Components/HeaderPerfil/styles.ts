import styled from "styled-components";
import { ButtonContainer, ButtonLink } from "../Buttons/styles";
import { Cores } from "../../styles";


export const Header = styled.header`
  width:100%;

  height:186px;
`
export const HeaderContainer = styled.div`
  ${ButtonLink}{
    background-color:transparent;
    color:${Cores.pink};
    font-size:18px;
    text-align:center;
    margin-top:82px;
  }

  ${ButtonContainer}{
    margin-top:82px;
  }
`
export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1024px;
    margin:0 auto;
    img{
      margin-top:82px;
    }
`
