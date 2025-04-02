import { BannerContainer, PerfilBanner, SubTitle,  Title, TitleContainer } from "./styles";

import { useParams } from "react-router-dom";
import { useGetRestauranteQuery } from "../../services/api";


export default function Banner() {
  const {id} = useParams()

		
	
		const { data: rrestaurante } = useGetRestauranteQuery(id!)
	

  return (
    <PerfilBanner>
      <BannerContainer>
        <img src={rrestaurante?.capa} alt="" />
      <TitleContainer className="container">
          <SubTitle>{rrestaurante?.tipo}</SubTitle>
          <Title>{rrestaurante?.titulo}</Title>
      </TitleContainer>
    </BannerContainer>
    </PerfilBanner>
  )
}
