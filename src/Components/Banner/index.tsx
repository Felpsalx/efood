import { BannerContainer, PerfilBanner, SubTitle,  Title, TitleContainer } from "./styles";
import { useEffect, useState } from "react";
import { ItensCardapio } from "../../Pages/Home";
import { useParams } from "react-router-dom";

export default function Banner() {
  const {id} = useParams()

  const [rrestaurante, setRRestaurante] = useState<ItensCardapio>()
  useEffect(()=> {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json()).then((res) => setRRestaurante(res) )

  }, [id])
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
