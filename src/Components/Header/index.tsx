import Hero from '../../assets/HeroHeader.png';
import Logo from '../../assets/logo.png';
import { ContainerHeader, Imagem, LogoContainer, Text, TextContainer } from './styles';

const Header = () =>(
      <Imagem style={{backgroundImage:`url(${Hero})`}}>
        <ContainerHeader>
          <LogoContainer>
            <img src={Logo} alt="Efood logo" title='E-FOOD' width={"125px"} height={"57.5px"}/>
          </LogoContainer>
            <TextContainer>
              <Text>
                Viva experiências gastronômicas no conforto da sua casa
              </Text>
            </TextContainer>
        </ContainerHeader>
      </Imagem>
)

export default Header
