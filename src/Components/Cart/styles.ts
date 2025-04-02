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
  opacity: 0.7;
`
export const CartCotainer = styled.div`
	position: fixed;
	
	color: #fff;
	top:0;
	left:0;

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
	${ButtonModal}{
		display:block;
		width:100%;

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
