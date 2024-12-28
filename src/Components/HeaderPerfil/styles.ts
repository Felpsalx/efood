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
  position:absolute;
  .container{
      left:318px;
      position:relative;
    }
  ${ButtonContainer}{
    margin-top:82px;
    margin-left:194px;
  }
`
export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    img{
      margin-left:194px;
      margin-top:63px;
    }


`
