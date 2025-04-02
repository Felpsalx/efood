import styled from "styled-components";
import { Breakpoints, Cores } from "../../styles";
import { ButtonContainer } from "../Buttons/styles";



export const ProductContainer = styled.div`
  padding:8px;
  background-color:${Cores.pink};
  color:${Cores.white};
  border-radius:3px;
  position:relative;
	
  img{
    width:304px;
    max-height:167px;
    border-radius:2px;
    object-fit:cover;
		@media (max-width: ${Breakpoints.tablet}) {
			width:100%;
		}	
  }
  ${ButtonContainer}{
    width:100%;
    display:block;
    background-color:white;
    padding:4px;
    border-radius:3px;
		@media (max-width: ${Breakpoints.tablet}) {
			font-size:14px;
		}	
  }


`

export const ButtonModal = styled.button`
  background-color:#fff;
  color:${Cores.pink};
  width:218px;
  font-size:14px;
  padding:4px;
  font-weight:bold;
  border:none;
  z-index:1;
  cursor: pointer;
  margin-bottom:49px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index:1;

  &.visivel{
    display:flex;
		
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }



`

export const Title = styled.h1`
  font-size:16px;
  font-weight:bold;
  margin-bottom:8px;
  margin-top:8px;
	
`

export const ModalContent = styled.div`
  position:relative;
  display:flex;
  max-width:1024px;
	max-height:280px;
  z-index:1;
  background-color:${Cores.pink};
  border-radius:2px;
	@media (max-width: ${Breakpoints.desktop}) {
			max-width: 90%;
		}	
	@media (max-width: ${Breakpoints.tablet}) {
			flex-direction:column;
			max-height:680px;
		}
	
  .fecharModal{
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    >img{
      width:16px;
    }

  }
  .ModalContentText{
    display:flex;
    flex-direction:column;
    margin-left:24px;
    margin-right:32px;
    >header{
    margin-top:32px;
  }
  ${Title}{
    font-size:18px;
    margin-bottom:16px;
    color:${Cores.white};
		@media (max-width: ${Breakpoints.desktop}) {
			font-size:16px;
		}	
		@media (max-width: ${Breakpoints.tablet}) {
			font-size:14px;
		}
  }

  }

  > img{
    width:280px;
    max-height:280px;
    margin:32px;
    object-fit:cover;
    display:block;
    border-radius:2px;
		@media (max-width: ${Breakpoints.desktop}) {
			width:280px;
    	max-height:180px;
		}	
		@media (max-width: ${Breakpoints.tablet}) {
			width:320px;
		}
  }
`
export const Content = styled.p`
  margin-bottom:8px;
  font-size:14px;
  line-height:22px;
  font-weight:400;
  width:100%;
  color:${Cores.white};
`



