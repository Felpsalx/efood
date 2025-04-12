import { CartCotainer, Overlay, SideBar, SideBarItems, SideTextContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { ButtonModal } from "../PerfilProducts/styles";
import trashcan from '../../assets/trashcan.svg'
import { useState } from "react";
import {formatapreco} from '../../utils/formatapreco'
import {formataTitulo} from '../../utils/formataTexto'
export default function CartHeader() {
	const { isOpen,items } = useSelector((state: RootReducer) => state.cart)
	const dispatch = useDispatch()
	const [checkout, setCheckout] = useState(false)

	const closeCart = () => {
    dispatch(close())
  }
	const deletar = (id: number) => {
    dispatch(remove(id))
  }
	const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }
	return (
	
		<>
			<CartCotainer className={isOpen ? 'is-open' : ''}>
		<Overlay onClick={closeCart} />
			<SideBar >
				{items.map((item)=>(
					<>
					<SideBarItems key={item.id}>
					<img src={item.foto} alt={item.titulo} />
					<SideTextContainer>
					<h3>{formataTitulo(item.titulo ?? '')}</h3>
						<p>{formatapreco(item.preco)}</p>
					<div>
						<img src={trashcan} onClick={()=> deletar(item.id!)} />
					</div>
					</SideTextContainer>
					</SideBarItems>
						</>
				))}
				<p>Valor total <span>{formatapreco(getTotalPrice())}</span></p>
				<ButtonModal onClick={()=> setCheckout(true)}>Continuar com a entrega</ButtonModal>
			</SideBar>
		</CartCotainer>

		{checkout && (
			<CartCotainer className={isOpen ? 'is-open' : ''}>
			<Overlay onClick={closeCart} />
				<SideBar >
					
					<p>Valor total <span>{formatapreco(getTotalPrice())}</span></p>
					<ButtonModal onClick={()=> setCheckout(false)}>Voltar para o carrinho</ButtonModal>
					<ButtonModal onClick={()=> console.log('checkout concluido')}>Continuar com a entrega</ButtonModal>
				</SideBar>
			</CartCotainer>
		)}
		</>
	)
}
