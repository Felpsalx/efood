//import Banner from "../../Components/Banner";
//import HeaderPerfil from "../../Components/HeaderPerfil";
//import ProductsListTwo from "../../Components/PerfilListProducts";

import { lazy, Suspense } from 'react';
import CartHeader from '../../Components/Cart';



const Banner = lazy(() => import('../../Components/Banner'));
const HeaderPerfil = lazy(() => import('../../Components/HeaderPerfil'));
const ProductsListTwo = lazy(() => import('../../Components/PerfilListProducts'));
export default function Perfil() {

  return (
    <div>
      <HeaderPerfil />
      <Suspense>
      <Banner />
      <ProductsListTwo/>
			<CartHeader />
      </Suspense>
    </div>
  )
}
