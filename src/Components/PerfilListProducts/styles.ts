import styled from "styled-components";
import { Breakpoints } from "../../styles";


export const ProductsContainer = styled.section`
  margin-top:64px;
  margin-bottom:160px;
`
export const List = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap: 32px;
	@media (max-width: ${Breakpoints.desktop}) {
		grid-template-columns:1fr 1fr;
	}
	@media (max-width: ${Breakpoints.tablet}) {
		grid-template-columns:1fr;
	}
`
export const ListItems = styled.div`
  background-color:#fff;
`
