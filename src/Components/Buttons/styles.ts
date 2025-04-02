import styled from "styled-components";
import { Breakpoints, Cores } from "../../styles";

import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
  background-color:${Cores.pink};
  text-decoration:none;
  color:${Cores.white};
  padding:4px 6px;
  font-size:14px;
  font-weight:bold;
  cursor: pointer;
`
export const ButtonContainer = styled.button`
  background-color:transparent;
  color:${Cores.pink};
  font-size:18px;
  font-weight:bold;
  border:none;
  cursor: pointer;
	@media (max-width: ${Breakpoints.tablet}) {
			font-size:16px;
		}
`
