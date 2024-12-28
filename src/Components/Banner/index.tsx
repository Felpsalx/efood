import { BannerContainer, PerfilBanner, SubTitle, TextContainer, Title, TitleContainer } from "./styles";
import massa from '../../assets/massa.png';

export default function Banner() {
  return (
    <PerfilBanner style={{backgroundImage: `url(${massa})`}}>
      <BannerContainer>
      <TitleContainer className="container">
        <TextContainer>
          <SubTitle>Italiana</SubTitle>
          <Title>La Dolce Vita Trattoria</Title>
        </TextContainer>
      </TitleContainer>
    </BannerContainer>
    </PerfilBanner>
  )
}
