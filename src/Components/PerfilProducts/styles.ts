import styled from "styled-components";
import { Cores } from "../../styles";
import { ButtonContainer } from "../Buttons/styles";


export const ProductContainer = styled.div`
  padding:8px;
  background-color:${Cores.pink};
  color:${Cores.white};
  border-radius:3px;
  img{
    width:304px;
    border-radius:2px;
  }
  ${ButtonContainer}{
    width:100%;
    display:block;
    background-color:white;
    padding:4px;
    border-radius:3px;
  }
`
export const Content = styled.p`
  margin-bottom:8px;
  font-size:14px;
  line-height:22px;
  font-weight:400;
  width:100%;
`
export const Title = styled.h1`
  font-size:16px;
  font-weight:bold;
  margin-bottom:8px;
  margin-top:8px;
`


