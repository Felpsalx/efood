import {  ButtonsContainer, Header, HeaderContainer } from './styles'
import hero from '../../assets/HeroHeader.png';
import logo from '../../assets/logo.png';
import { Button } from '../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import {	open } from '../../store/reducers/cart'
import { RootReducer } from '../../store';


export default function HeaderPerfil() {
	const { items } = useSelector((state: RootReducer) => state.cart)
	const dispatch = useDispatch()
	const openCart = () => {
    dispatch(open())
  }
  return (
    <Header style={{backgroundImage: `url(${hero})`}}>
      <HeaderContainer >
        <div className='container'>
        <ButtonsContainer>
        <Button to='/' children={'Restaurantes'} title={'Restaurantes'} type={'link'} />
        <img src={logo} alt="" />
        <Button Onclick={openCart} children={`(${items.length}) Produto(s) no carrinho`} title={'Produto(s) no carrinho'} type={'button'} />
        </ButtonsContainer>
        </div>
      </HeaderContainer>
    </Header>
  )
}
