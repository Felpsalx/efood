import { CartCotainer, Content, ContentOfcontent, ContentOfText, DeliveryContainer, Overlay, SideBar, SideBarItems, SideTextContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { ButtonModal } from "../PerfilProducts/styles";
import trashcan from '../../assets/trashcan.svg'
import { useState } from "react";
import {formatapreco} from '../../utils/formatapreco'
import {formataTitulo} from '../../utils/formataTexto'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { usePurchaseMutation } from "../../services/api";

export default function CartHeader() {
	const { isOpen,items } = useSelector((state: RootReducer) => state.cart)
	const dispatch = useDispatch()
	const [checkout, setCheckout] = useState(false)
	const [entrega, setEntrega] = useState(false)	
	const [purchase, { data, isSuccess, reset }] = usePurchaseMutation()
	const form =useFormik({
		initialValues: {
     WhoDelivered:'',
     Address:'',
     City:'',
     Cep:'',
     NumberHouse:'',
     Complement:'',
     CardName:'',
     NumberCard:'',
     MouthVenc:'',
     YearVenc:'',
     CodeCard:''
    },
		validationSchema: Yup.object({
			WhoDelivered: Yup.string().min(5,'Campo invalido o minimo é 5 caracteres').required('Campo Obrigatorio'),
			Address: Yup.string().required('Campo Obrigatorio'),
			Cep: Yup.string().min(8,'O cep esta errado, utilize apenas números').max(8,'O maximo de caracteres é 8').required('Campo Obrigatorio'),
			City: Yup.string().required('Campo Obrigatorio'),
			NumberHouse: Yup.string().min(1,'Por favor verifique o número de sua residencia e tente novamente').required('Campo Obrigatorio'),
			Complement: Yup.string().min(5,'O minimo é 5 caracteres'),

			CardName: Yup.string().when((_, schema) =>
        entrega ? schema.required('O campo é obrigatorio').min(5,'O nome deve ter no minimo 5 caracteres') : schema
      ),
			NumberCard: Yup.string().when((_, schema) =>
        entrega ? schema.required('O campo é obrigatorio').min(16,'O cartão deve ter no minimo 16 caracteres').max(16,'O cartão deve ter no minimo 16 caracteres') : schema
      ),
			MouthVenc: Yup.string().when((_, schema) =>
        entrega ? schema.required('O campo é obrigatorio').min(2,'O mês tem 2 caracteres correija seu erro').max(2,'O campo esta errado') : schema
      ),
			YearVenc: Yup.string().when((_, schema) =>
        entrega ? schema.required('O campo é obrigatorio').min(4,'O ano tem mais de 3 caracteres') : schema
      ),
			CodeCard: Yup.string().when((_, schema) =>
        entrega ? schema.required('O campo é obrigatorio').min(3,'O cartão deve ter no minimo 3 caracteres') : schema
      ),

		}),
		onSubmit: (values) => {
      purchase({
				delivery:{
					reciver:values.WhoDelivered,
					address:{
						city:values.City,
						complement:values.Complement,
						description:values.Address,
						number:Number(values.NumberHouse),
						zipCode:values.Cep
					}
				},
				payment:{
					card:{
						code:values.CodeCard,
						expires:{
							month:Number(values.MouthVenc),
							year:Number(values.YearVenc)
						},
						name:values.CardName,
						number:values.NumberCard
					}
				},
				products: items.map(item => ({
					id: item.id!,
					price: item.preco!
				}))
			})
    }
	})
	const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }
	const closeCart = () => {
    dispatch(close())
		setCheckout(false)
		setEntrega(false)
  }
	const closeTicket = () => {
    dispatch(close())
		setCheckout(false)
		setEntrega(false)
		reset()
		form.resetForm()
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
				<ButtonModal type="submit" onClick={()=> setCheckout(true)}>Continuar com a entrega</ButtonModal>
			</SideBar>
		</CartCotainer>

		{checkout && (
			<CartCotainer className={isOpen ? 'is-open' : ''}>
			<Overlay onClick={closeCart} />
					<SideBar>
							<h3>Entrega</h3>
						<form onSubmit={form.handleSubmit}>
						<DeliveryContainer>
							<label htmlFor="WhoDelivered">Quem ira receber</label>
							<input type="text" id="WhoDelivered" name="WhoDelivered"
							  value={form.values.WhoDelivered}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
							/>
							<small>{getErrorMessage('WhoDelivered', form.errors.WhoDelivered)}</small>	
							<label htmlFor="Address">Endereço</label>
							<input type="text" id="Address"
							name="Address"
							  value={form.values.Address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
							/>
							<small>{getErrorMessage('Address', form.errors.Address)}</small>	
							<label htmlFor="City">Cidade</label>
							<input type="text" id="City" name="City" 
							value={form.values.City}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
							/>
								<small>{getErrorMessage('City', form.errors.City)}</small>	
							<Content>
								<ContentOfcontent>
								<label htmlFor="Cep">Cep</label>
								<input type="text" id="Cep" name="Cep"
								value={form.values.Cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
								/>
								<small>{getErrorMessage('Cep', form.errors.Cep)}</small>	
								</ContentOfcontent>
								<ContentOfcontent>
								<label htmlFor="NumberHouse">Número</label>
								<input type="text" id="NumberHouse" name="NumberHouse"
									value={form.values.NumberHouse}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
								/>
								<small>{getErrorMessage('NumberHouse', form.errors.NumberHouse)}</small>	
								</ContentOfcontent>
							</Content>
							<label htmlFor="Complement">Complemento (opcional)</label>
							<input type="text" name="Complement"
							value={form.values.Complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
							/>
							<small>{getErrorMessage('Complement', form.errors.Complement)}</small>	
							<br/>
							<ButtonModal type="button" onClick={()=> setCheckout(false)}>Voltar para o carrinho</ButtonModal>
							<ButtonModal type="submit" onClick={()=> setEntrega(true)}>Continuar com a entrega</ButtonModal>
						</DeliveryContainer>
						</form>
					</SideBar>
			</CartCotainer>
		)}


		{entrega && (
			<CartCotainer className={isOpen ? 'is-open' : ''}>
			<Overlay onClick={closeCart} />
				<SideBar>
						<h3>Pagamento - Valor a pagar <span>{formatapreco(getTotalPrice())}</span></h3>
					<form onSubmit={form.handleSubmit}>
					<DeliveryContainer>
						<label htmlFor="CardName">Nome no cartão</label>
						<input type="text" name="CardName"
							  value={form.values.CardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
						/>
							<small>{getErrorMessage('CardName', form.errors.CardName)}</small>
						<Content>
							<ContentOfcontent>
								<label htmlFor="NumberCard">Número do cartão</label>
								<input type="text"  name="NumberCard"
								value={form.values.NumberCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
								/>
									<small>{getErrorMessage('NumberCard', form.errors.NumberCard)}</small>
							</ContentOfcontent>
							<ContentOfcontent>
								<label htmlFor="CodeCard" >CVV</label>
								<input type="text" name="CodeCard"
									value={form.values.CodeCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
								/>
									<small>{getErrorMessage('CodeCard', form.errors.CodeCard)}</small>
							</ContentOfcontent>
						</Content>
						<Content>
							<ContentOfcontent>
							<label htmlFor="MouthVenc">Mês de vencimento</label>
							<input type="text" name="MouthVenc"
								value={form.values.MouthVenc}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
							/>
								<small>{getErrorMessage('MouthVenc', form.errors.MouthVenc)}</small>
							</ContentOfcontent>
							<ContentOfcontent>
							<label htmlFor="YearVenc">Ano de vencimento</label>
							<input type="text" name="YearVenc"
							value={form.values.YearVenc}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
							/>
								<small>{getErrorMessage('YearVenc', form.errors.YearVenc)}</small>
							</ContentOfcontent>
						</Content>
						<br />
						<ButtonModal type="button" onClick={()=> setEntrega(false)}>Voltar para o carrinho</ButtonModal>
						<ButtonModal type="submit" >Continuar com a entrega</ButtonModal>
					</DeliveryContainer>
						</form>
				</SideBar>
			</CartCotainer>
		)}
		{isSuccess &&(
			<CartCotainer className={isOpen ? 'is-open' : ''}>
			<Overlay onClick={closeCart} />
				<SideBar>
						<h3>Pedido realizado - {data.orderId}</h3>
						<ContentOfText>
							Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
							Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
							Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
							Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
						</ContentOfText>
						<ButtonModal onClick={closeTicket}>Concluir</ButtonModal>
				</SideBar>
			</CartCotainer>			
		)}
		</>
	)
}
