import { ButtonModal, Content, Modal, ModalContent, ProductContainer, Title } from "./styles";



import { ItensCardapio } from "../../Pages/Home";
import { Button } from "../Buttons";
import { useState } from "react";
import close from '../../assets/close 1.svg'
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";

interface ModalState extends ItensCardapio{
  visivel: boolean
}
export default function CardPerfil({titulo, descricao, foto, porcao, preco, id}:ItensCardapio) {
  const [modal, setModal] = useState<ModalState>({
    visivel: false,
    titulo,
    descricao,
    foto
  });
  const toggleModal = () => setModal({...modal,visivel: true});
  const fecharModal = () => setModal({...modal,visivel: false});
  const formatapreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  const fomataDescricao = (descricao: string) => {
    if (descricao.length > 135) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }
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
        <Content>{fomataDescricao(descricao)}</Content>
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
