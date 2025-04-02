import styled from "styled-components";
import { Breakpoints } from "../../styles";


export const ListProductsContainer= styled.section`
  margin-top:80px;
  margin-bottom:120px;
	
	@media (max-width: ${Breakpoints.tablet}) {
  overflow-x: hidden;
  }
`
export const List= styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  column-gap: 80px;
	@media (max-width: ${Breakpoints.desktop}) {
		display:flex;
		flex-wrap:wrap;
		margin-left:75px;
		gap:0;
	}	
	@media (max-width: ${Breakpoints.tablet}) {
    display:flex;
		flex-direction: column;
   	margin:0 auto;
  }
	
`
export const ListItems= styled.div`
  background-color:#fff;
  width:472px;
  margin-top: 48px;
  height:398px;
	@media (max-width: ${Breakpoints.tablet}) {
		width:440px;
			margin-bottom:180px;
  		height:298px;
		}

`

