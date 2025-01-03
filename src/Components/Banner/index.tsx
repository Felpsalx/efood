import { BannerContainer, PerfilBanner, SubTitle,  Title, TitleContainer } from "./styles";
import massa from '../../assets/massa.png';

export default function Banner() {
  return (
    <PerfilBanner style={{backgroundImage: `url(${massa})`}}>
      <BannerContainer>
      <TitleContainer className="container">
          <SubTitle>Italiana</SubTitle>
          <Title>La Dolce Vita Trattoria</Title>
      </TitleContainer>
    </BannerContainer>
    </PerfilBanner>
  )
}
