import { List, ListItems, ListProductsContainer } from './styles'
import Products from '../Products'
import sushi from '../../assets/sushi.png'
import massa from '../../assets/massa.png'


export default function ListProduct() {
  return (
    <ListProductsContainer>
      <div className='container'>
        <List>
          <ListItems>
            <Products  title={'Hioki Sushi '} rating={4.9} image={sushi} description={'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'} infos={[  'Destaque do dia', 'Japonesa']}/>
          </ListItems>

          <ListItems>
            <Products image={massa} title={'La Dolce Vita Trattoria'} rating={4.6} description={'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'} infos={['Italiana']}  />
          </ListItems>

          <ListItems>
            <Products image={sushi} title={'Hioki Sushi '} rating={4.6} description={'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'} infos={['Japonesa']} />
          </ListItems>

          <ListItems>
            <Products image={massa} title={'La Dolce Vita Trattoria'} rating={4.6} description={'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'}  infos={['Italiana']} />
          </ListItems>

          <ListItems>
            <Products image={sushi} title={'Hioki Sushi'} rating={4.6} description={'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'} infos={['Japonesa']}  />
          </ListItems>

          <ListItems>
            <Products image={massa} title={'La Dolce Vita Trattoria'} rating={4.6} description={'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'} infos={['Italiana']}  />
          </ListItems>
        </List>
      </div>
    </ListProductsContainer>
  )
}
