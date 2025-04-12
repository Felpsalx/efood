import { ClockLoader } from 'react-spinners'
import Header from '../../Components/Header'
import ListProduct from '../../Components/ListProducts'
import {useGetRestaurantesQuery} from '../../services/api'
import { ContainerSpinner } from './styles'
import { Cores } from '../../styles'


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
					<ClockLoader size={100} color={`${Cores.pink}`} />
					<p>Carregando...</p>
			</ContainerSpinner>
		</div>
  )
}
