import star from '../../assets/star.png'
import { ButtonLink } from '../Buttons/styles'
import Tag from '../Tag'

import { ButtonContainer, CardContent,  ContentContainer,  ImageContainer,  Infos,  RatingContainer, StarContainer, TitleContainer } from './styles'

type Props = {
  title: string
  image: string
  rating: number
  description:string
  infos:string[]
}


export default function Products({ image,title, rating,description, infos}:Props) {
  return (
    <>
    <ImageContainer style={{backgroundImage: `url(${image})`}}>
      <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
      </Infos>
    </ImageContainer>
    <CardContent>
          <div>
            <TitleContainer>
              {title}
              <RatingContainer>
                <div>
                  {rating}
                </div>
                <StarContainer>
                  <img src={star} alt="Estrela de avaliação" title='Avaliação' />
                </StarContainer>
              </RatingContainer>
            </TitleContainer>
            <ContentContainer>
              {description}
            </ContentContainer>
            <ButtonContainer>
              <ButtonLink to='/perfil' title='Saiba mais'>Saiba mais</ButtonLink>
            </ButtonContainer>
          </div>
      </CardContent>
    </>
  )
}
