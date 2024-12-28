import {  ButtonsContainer, Header, HeaderContainer } from './styles'
import hero from '../../assets/HeroHeader.png';
import logo from '../../assets/logo.png';
import { Button } from '../Buttons';

export default function HeaderPerfil() {

  return (
    <Header style={{backgroundImage: `url(${hero})`}}>
      <HeaderContainer >
        <div className='container'>
        <ButtonsContainer>
        <Button to='/' children={'Restaurantes'} title={'Restaurantes'} type={'link'} />
        <img src={logo} alt="" />
        <Button to='/' children={`${0} Produto(s) no carrinho`} title={'Produto(s) no carrinho'} type={'button'} />
        </ButtonsContainer>
        </div>
      </HeaderContainer>
    </Header>
  )
}
