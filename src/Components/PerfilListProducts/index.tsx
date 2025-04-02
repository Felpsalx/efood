import { useParams } from "react-router-dom"; 
import CardPerfil from "../PerfilProducts";
import { List, ListItems, ProductsContainer } from "./styles";

import { useGetRestauranteQuery } from "../../services/api";
import { ContainerSpinner, LoadingSpinner } from "../../Pages/Home/styles";



export default function ProductsListTwo() {
  const { id } = useParams(); 
  

	const { data } = useGetRestauranteQuery(id!)

	const cardapioitens = Array.isArray(data?.cardapio) ? data.cardapio : [];
  
	if(!cardapioitens){
		return(
			<ContainerSpinner>
					<LoadingSpinner /> 
			</ContainerSpinner>
		)
	}
  return (
    <ProductsContainer>
      <div className="container">
        <List>
          {cardapioitens.map((item) => (
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
