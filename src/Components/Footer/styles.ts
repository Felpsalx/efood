import styled from "styled-components";
import { Breakpoints, Cores } from "../../styles";


export const FooterContainer = styled.div`
  background-color:${Cores.white2};
  width:100%;
  height:100%;

`
export const FooterContentContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
export const FooterLogoContainer = styled.div`
  margin-top:40px;
  margin-bottom:32px;
`
export const FooterSocialIcons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:18px;
  margin-right:19px;
  img{
    margin-left:8px;
  }
`
export const FooterTextContainer = styled.div`
  margin-bottom:40px;
`
export const FooterText= styled.p`
  width:480px;
  font-size:10px;
  text-align:center;
  color:${Cores.pink};
  margin-top:80px;
  margin-bottom:40px;
	@media (max-width: ${Breakpoints.tablet}) {
		width:80%;
  }
`
