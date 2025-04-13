import Hero from '../../assets/HeroHeader.png';
import Logo from '../../assets/logo.png';
import { ContainerHeader, HeroImage, ImagemWrapper, LogoContainer, Text, TextContainer } from './styles';

const Header = () =>(
	<ImagemWrapper>
  <HeroImage src={Hero} alt="Banner gastronômico" />

  <ContainerHeader>
    <LogoContainer>
      <img src={Logo} alt="Efood logo" title="E-FOOD" width="125" height="57.5" />
    </LogoContainer>
    <TextContainer>
      <Text>
        Viva experiências gastronômicas no conforto da sua casa
      </Text>
    </TextContainer>
  </ContainerHeader>
</ImagemWrapper>
)

export default Header
