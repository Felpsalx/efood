import { Content, ProductContainer, Title } from "./styles";
import pizza from '../../assets/pizza.svg';
import { Button } from "../Buttons";

type Props= {
  title: string
  content: string
  btn: string
}
export default function CardPerfil({title, content, btn}:Props) {
  return (
      <ProductContainer>
        <img src={pizza} alt="" />
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Button children={btn} title={btn} type={"button"} />
      </ProductContainer>
  )
}
