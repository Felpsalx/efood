
import star from '../../assets/star.png'
import { ItensCardapio } from '../../Pages/Home'
import { ButtonLink } from '../Buttons/styles'
import Tag from '../Tag'

import { ButtonContainer, CardContent,  ContentContainer,  ImageContainer,  Infos,  RatingContainer, StarContainer, TitleContainer } from './styles'





export default function Products({ capa,titulo, avaliacao,descricao, tipo, id, destacado}:ItensCardapio) {


  const infosToDisplay = Array.isArray(tipo) ? tipo.join(', ') : tipo;
  return (
    <div>
    <ImageContainer>
      <img  src={capa} alt="" />
    <Infos>

          {destacado ? (
                <Tag>
                  <p>
                    Destaque da semana
                  </p>
                </Tag>
              ) : ''}
          <Tag>
            <p>
              {infosToDisplay}
            </p>
          </Tag>
        </Infos>
    </ImageContainer>
    <CardContent>
          <div>
            <TitleContainer>
              {titulo}
              <RatingContainer>
                <div>
                  {avaliacao}
                </div>
                <StarContainer>
                  <img src={star} alt="Estrela de avaliação" title='Avaliação' />
                </StarContainer>
              </RatingContainer>
            </TitleContainer>
            <ContentContainer>
              {descricao}
            </ContentContainer>

            <ButtonContainer>
              <ButtonLink to={`/perfil/${id}`} title='Saiba mais'>Saiba mais</ButtonLink>
            </ButtonContainer>
          </div>
      </CardContent>
    </div>
  )
}
