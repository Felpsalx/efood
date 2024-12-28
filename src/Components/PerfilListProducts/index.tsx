import CardPerfil from "../PerfilProducts";
import { List, ListItems, ProductsContainer } from "./styles";

export default function ProductsListTwo() {
  return (
    <ProductsContainer>
      <div  className="container">
      <List>
        <ListItems>
          <CardPerfil title={"Pizza marguerita"} content={"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"} btn={"Adicionar ao carrinho"} />
        </ListItems>
        <ListItems>
          <CardPerfil title={"Pizza marguerita"} content={"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"} btn={"Adicionar ao carrinho"} />
        </ListItems>
        <ListItems>
          <CardPerfil title={"Pizza marguerita"} content={"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"} btn={"Adicionar ao carrinho"} />
        </ListItems>
        <ListItems>
          <CardPerfil title={"Pizza marguerita"} content={"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"} btn={"Adicionar ao carrinho"} />
        </ListItems>
        <ListItems>
          <CardPerfil title={"Pizza marguerita"} content={"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"} btn={"Adicionar ao carrinho"} />
        </ListItems>
        <ListItems>
          <CardPerfil title={"Pizza marguerita"} content={"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"} btn={"Adicionar ao carrinho"} />
        </ListItems>
      </List>
      </div>
    </ProductsContainer>
  )
}
