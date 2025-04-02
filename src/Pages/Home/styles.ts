import styled, { keyframes } from 'styled-components'
import { Cores } from '../../styles'

// Animação de rotação
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const ContainerSpinner = styled.div`
  margin-bottom: 40px;
  text-align: center;
`

export const LoadingSpinner = styled.div`
  width: 80px;
  height: 80px;
  border: 8px solid rgba(255, 105, 180, 0.3);
	border-top: 8px solid ${Cores.pink};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: auto;
  margin-top: 20px;`
