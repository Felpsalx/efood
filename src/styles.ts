
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
	
	@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-v30-latin-regular.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/roboto-v30-latin-700.woff2') format('woff2');
    font-display: swap;
  }


*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
  font-family: "Roboto", serif;
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
