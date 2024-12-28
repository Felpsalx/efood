import Logo from '../../assets/logo.png';
import twitter from '../../assets/twitterLogo.svg';
import facebook from '../../assets/facebookLogo.svg';
import instagram from '../../assets/instagramLogo.svg';

import { FooterContainer, FooterContentContainer, FooterLogoContainer, FooterSocialIcons, FooterText } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <div className='container'>
      <FooterContentContainer>
        <FooterLogoContainer>
          <img src={Logo} alt="" />
        </FooterLogoContainer>
        <FooterSocialIcons>
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        </FooterSocialIcons>
          <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
          </FooterText>
      </FooterContentContainer>
      </div>
    </FooterContainer>
  )
}
