import styled from "styled-components";
import { Cores } from "../../styles";


export const BannerContainer = styled.div`
  position:relative;
  top:0;
  left:0;
  display:flex;
  justify-content:center;
  align-items:center;
  max-height:280px;
  z-index:1;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
    z-index:-1;
  }
  img{
    position:absolute;
    object-fit:cover;
    z-index:-1;
    width:100%;
    height:100%;
  }
`
export const PerfilBanner = styled.div`
  width:100%;
  background-repeat:no-repeat;
`
export const Title = styled.h1`
  color:${Cores.white};
  font-size:32px;
  font-weight:bold;
  margin-top:157px;
`

export const SubTitle = styled.p`
  color:${Cores.white};
  font-size:32px;
  font-weight:100;
  line-height:37px;
  &::first-letter{
    text-transform:uppercase;
  }
`

export const TitleContainer = styled.div`
  padding:25px 0px;
`


