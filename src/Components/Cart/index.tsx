import { CartCotainer, Overlay, SideBar, SideBarItems, SideTextContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { ButtonModal } from "../PerfilProducts/styles";
import trashcan from '../../assets/trashcan.svg'

export default function CartHeader() {
	const { isOpen,items } = useSelector((state: RootReducer) => state.cart)
	const dispatch = useDispatch()
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

	const formatapreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
	const formataDescricao = (titulo: string) => {
		return titulo.length > 24 ? titulo.slice(0, 20) + '...' : titulo;
	};
	return (
	
		<CartCotainer className={isOpen ? 'is-open' : ''}>
		<Overlay onClick={closeCart} />
			<SideBar >
				{items.map((item)=>(
					<>
					<SideBarItems key={item.id}>
					<img src={item.foto} alt={item.titulo} />
					<SideTextContainer>
						<h3>{formataDescricao(item.titulo) }</h3>
						<p>{formatapreco(item.preco)}</p>
					<div>
						<img src={trashcan} onClick={()=> deletar(item.id)} />
					</div>
					</SideTextContainer>
					</SideBarItems>
						</>
				))}
				<p>Valor total <span>{formatapreco(getTotalPrice())}</span></p>
				<ButtonModal>Continuar com a entrega</ButtonModal>
			</SideBar>
		</CartCotainer>
	
	)
}
