import { ButtonModal, Content, Modal, ModalContent, ProductContainer, Title } from "./styles";
import { ItensCardapio } from '../../Interfaces/itensCardapio'
import { Button } from "../Buttons";
import { memo, useState } from "react";
import close from '../../assets/close 1.svg'
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";
import {formatapreco} from '../../utils/formatapreco'
import {fomataDescricao} from '../../utils/formataTexto'
interface ModalState extends ItensCardapio{
  visivel: boolean
}
 function CardPerfil({titulo, descricao, foto, porcao, preco, id}:ItensCardapio) {
  const [modal, setModal] = useState<ModalState>({
    visivel: false,
    titulo,
    descricao,
    foto
  });
  const toggleModal = () => setModal(prevState => ({ ...prevState, visivel: true }));
	const fecharModal = () => setModal(prevState => ({ ...prevState, visivel: false }));
 
  
	const dispatch = useDispatch()
  const addCart = () => {
		dispatch(add({ titulo, foto, preco, id}));
    dispatch(open())
		fecharModal()
  }
  return (
    <>
      <ProductContainer>
        <img loading="lazy" src={foto} alt="" />
        <Title>{titulo}</Title>
        <Content>{fomataDescricao(descricao!)}</Content>
        <Button children={"Ver mais"} title={"Ver mais sobre o produto"} type={"button"} Onclick={toggleModal}/>
      </ProductContainer>
      <Modal className={modal.visivel ? 'visivel' : ''}>
        <ModalContent>
            <img loading="lazy" src={foto} alt="" />
            <div className="fecharModal">
              <img loading="lazy" src={close} alt="" onClick={fecharModal}  />
            </div>
          <div className="ModalContentText">
            <header>
              <Title>{titulo}</Title>
            </header>
          <Content>{descricao}</Content>
          <Content>Serve: {porcao}</Content>
          <ButtonModal onClick={addCart} title="Adicionar ao carrinho">Adicionar ao carrinho - {formatapreco(preco)}</ButtonModal>
          </div>
        </ModalContent>
          <div className="overlay" onClick={fecharModal}></div>
      </Modal>
    </>
  )
}
export default memo(CardPerfil)
