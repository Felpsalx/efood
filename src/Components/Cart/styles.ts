import styled from "styled-components";
import { Cores } from "../../styles";
import { ButtonModal } from "../PerfilProducts/styles";


export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
`
export const CartCotainer = styled.div`
	position: fixed;
	
	color: #fff;
	top:0;
	left:0;
	*{
		font-family: 'Roboto';
	}
	width:100%;
	height:100%;
	display:none;
	justify-content:flex-end;
	z-index:1;
	&.is-open{
		display:flex;
	}

`
export const SideBar = styled.aside`
	color: #fff;
	z-index:1;
	max-width:360px;
	background-color:${Cores.pink};
	padding-left: 8px;
	padding-right:8px;
	overflow-y:auto;
	> p{
		display:flex;
		justify-content:space-between;
		margin-top:40px;
		margin-bottom:16px;
	}
		h3{
		margin-bottom:14px;
		margin-top:14px;
	}
	${ButtonModal}{
		display:block;
		width:100%;
		margin-top:0px;
		margin-bottom:8px;
	}
	
	&::-webkit-scrollbar {
  width: 10px;

	}
	&::-webkit-scrollbar-track {
    background: #333;
  }
	&::-webkit-scrollbar-thumb {
    background:rgba(255, 105, 180, 0.6); /* Cor do "thumb" (indicador de rolagem) */
    border-radius: 4px;
		height:4px;
  }
`

export const SideBarItems = styled.div`
	display:flex;
	position: relative;
	justify-content:center;
	align-items:center;
	color:${Cores.pink};
	background-color:${Cores.white};
	margin-top:32px;
	border-radius:4px;
	max-width:344px;
	max-height:100px;

	> img{
		width:80px;
		height:80px;
		margin-left:8px;
		margin-top:8px;
		margin-bottom:12px;
		border-radius:4px;
		object-fit:cover;
	}

`
export const SideTextContainer = styled.div`
	margin-left:8px;
	margin-right:108px;
	>div{
		img{
			position: absolute;
			top:76px;
			right:8px;
			cursor:pointer;
		}
	}
	h3{
		margin-bottom:16px;
		margin-top:16px;
	}
	p{
		margin-bottom:33px;
	}
`
export const DeliveryContainer = styled.div`
	display:flex;
	flex-direction:column;

	label{
			margin-bottom:8px;
			margin-top:24px;
		}
	input{
		min-width:344px;
		min-height:32px;
		border:none;
		font-size:14px;
		font-weight:bold;
		color:#4B4B4B;
	}
	small{
		color:red;
		font-size:14px;
		font-weight:bold;
		max-width:150px;
	}
`
export const Content = styled.div`
		display:flex;
		justify-content:space-between;
	input{
			min-width:155px;
			min-height:36px;

		}
		
`
export const ContentOfcontent = styled.div`
	display:flex;
	flex-direction:column;

`
export const ContentOfText = styled.p`
	font-size:14px;
	line-height:22px;
	width:344px;
	height:286px;
	font-weight:400;
`
