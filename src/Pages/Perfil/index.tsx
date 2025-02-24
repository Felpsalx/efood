//import Banner from "../../Components/Banner";
//import HeaderPerfil from "../../Components/HeaderPerfil";
//import ProductsListTwo from "../../Components/PerfilListProducts";

import { lazy, Suspense } from 'react';


const Banner = lazy(() => import('../../Components/Banner'));
const HeaderPerfil = lazy(() => import('../../Components/HeaderPerfil'));
const ProductsListTwo = lazy(() => import('../../Components/PerfilListProducts'));
export default function Perfil() {

  return (
    <div>
			
      <Suspense fallback='Carregando'>
      <HeaderPerfil />
      <Banner />
      <ProductsListTwo/>
      </Suspense>
    </div>
  )
}
