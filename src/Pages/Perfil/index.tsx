//import Banner from "../../Components/Banner";
//import HeaderPerfil from "../../Components/HeaderPerfil";
//import ProductsListTwo from "../../Components/PerfilListProducts";

import { lazy, Suspense } from 'react';
import CartHeader from '../../Components/Cart';
import { ContainerSpinner } from '../Home/styles';
import { ClockLoader } from 'react-spinners';
import { Cores } from '../../styles';
const Banner = lazy(() => import('../../Components/Banner'));
const HeaderPerfil = lazy(() => import('../../Components/HeaderPerfil'));
const ProductsListTwo = lazy(() => import('../../Components/PerfilListProducts'));

export default function Perfil() {

  return (
    <div>
      <Suspense fallback={
				<ContainerSpinner>
									<ClockLoader size={100} color={`${Cores.pink}`} />
									<p>Carregando...</p>
					</ContainerSpinner>
			}>
				<HeaderPerfil />
				<Banner />
				<ProductsListTwo/>
      </Suspense>
			<CartHeader />
    </div>
  )
}
