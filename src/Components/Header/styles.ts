import styled from "styled-components";
import { Cores } from "../../styles";


export const Imagem=styled.div`
width:100%;
height:380px;
`


export const ContainerHeader = styled.header`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;


`
export const LogoContainer = styled.div`
    margin-top:64px;
    margin-bottom:140px;
    width:125px;
    height:57px;
`

export const TextContainer = styled.div`
  margin-bottom:80px;
  width:539px;
  height:84px;
  text-align:center;
`
export const Text = styled.h1`
    font-size:36px;
    font-weight:bold;
    color:${Cores.pink};
`
