import { createGlobalStyle } from "styled-components";
export const Cores = {
  pink:'#E66767',
  white:'#FFFFFF',
  white2:'#FFEBD9',
}

export const Breakpoints ={
	desktop:'1024px',
	tablet: '768px'
}

export const GlobalCss = createGlobalStyle`

*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
  font-family: "Roboto", serif;
  font-display:swap;
  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
		@media (max-width: ${Breakpoints.desktop}) {
			max-width: 80%;
		}
		@media (max-width: ${Breakpoints.tablet}) {
			max-width: 80%;
		}
  }

}
`
