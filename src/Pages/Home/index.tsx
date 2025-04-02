
import Header from '../../Components/Header'
import ListProduct from '../../Components/ListProducts'

import {useGetRestaurantesQuery} from '../../services/api'
import { ContainerSpinner, LoadingSpinner } from './styles'

export interface ItensCardapio  {
  titulo?: string
  nome?:string
  capa?: string
  avaliacao?: number
  id?: number
  descricao?:string
  tipo?:string[]
  foto: string
  destacado?:boolean;
  porcao?: string
  preco?: number
}
export default function Home() {

	const {data: list} = useGetRestaurantesQuery()


	if(list){
		return(
		<div>
			<Header />
			<ListProduct lists={list!}/>
		</div>
		)
	}
	return (
		<div>
				<Header />
    <ContainerSpinner>
        <LoadingSpinner></LoadingSpinner>
    </ContainerSpinner>
		</div>
  )
}
