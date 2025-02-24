import styled from "styled-components";
import { Cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const CardContent = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  padding:8px 7px 0px;
  color:${Cores.pink};
`
export const ImageContainer = styled.div`
    position: relative;
  img{
    max-width:472px;
    width:100%;
    max-height:217px;
    height:100%;
    display:block;
    object-fit:cover;
  }
  ${TagContainer} {
    margin-right:8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const TitleContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:16px;
  font-size:18px;
  font-weight:bold;
`

export const RatingContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
export const StarContainer = styled.div`
    margin-left:8px;
`
export const ContentContainer = styled.p`
  margin-bottom:16px;
  font-size:14px;
  line-height:22px;
`

export const ButtonContainer = styled.div`
  margin-bottom:14px;
`
