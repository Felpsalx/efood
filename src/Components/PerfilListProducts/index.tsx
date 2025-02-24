import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para pegar o id da URL
import CardPerfil from "../PerfilProducts";
import { List, ListItems, ProductsContainer } from "./styles";
import { ItensCardapio } from "../../Pages/Home"; // Certifique-se de que o tipo está correto


export default function ProductsListTwo() {
  const { id } = useParams(); // Pegando o id da URL
  const [cardapioItens, setCardapioItens] = useState<ItensCardapio[]>([]); // Estado para armazenar os itens

  // UseEffect para buscar os dados assim que o id for alterado
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapioItens(res.cardapio)) // Supondo que a resposta tenha a chave 'cardapio'
      .catch((error) => console.error("Erro ao buscar dados do produto:", error));

  }, [id]);

  return (
    <ProductsContainer>
      <div className="container">
        <List>
          {cardapioItens.map((item) => (
            <ListItems key={item.id}>

              <CardPerfil
                foto={item.foto || "defaultImage.jpg"}
                titulo={item.nome}
                descricao={item.descricao} id={item.id} destacado={false}
                porcao={item.porcao}
                preco = {item.preco}
                />
            </ListItems>
          ))}
	
        </List>
      </div>
    </ProductsContainer>
  );
}
