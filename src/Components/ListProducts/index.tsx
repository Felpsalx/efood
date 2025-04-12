import { List, ListItems, ListProductsContainer } from './styles'
import Products from '../Products'
import { ItensCardapio } from '../../Interfaces/itensCardapio'


export type Props={
  lists: ItensCardapio[]
}
export default function ListProduct({lists}: Props) {
  return (
    <ListProductsContainer>
      <div className='container'>
        <List>
          {lists.map((list)=>(
            <ListItems key={list.id}>


            <Products
                titulo={list.titulo}
                avaliacao={list.avaliacao}
                capa={list.capa}
                descricao={list.descricao}
                tipo={list.tipo}
                id={list.id} foto={''} destacado={list.destacado} />

          </ListItems>
          ))}
        </List>
      </div>
    </ListProductsContainer>
  )
}
