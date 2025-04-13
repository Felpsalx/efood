import styled from "styled-components";
import { Breakpoints, Cores } from "../../styles";


export const Imagem=styled.div`
	width:100%;
	height:380px;

`


// export const ContainerHeader = styled.header`
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;

// `
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
	@media (max-width: ${Breakpoints.tablet}) {
			width:100%;
		}
`
export const Text = styled.h1`
    font-size:36px;
    font-weight:bold;
    color:${Cores.pink};
		@media (max-width: ${Breakpoints.tablet}) {
			font-size:24px;
		}
`
export const ImagemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px; 
  overflow: hidden;
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const ContainerHeader = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
