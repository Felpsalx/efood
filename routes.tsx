import { Route, Routes } from "react-router-dom"
//import Perfil from './src/Pages/Perfil'
//import Home from "./src/Pages/Home"
import { lazy, Suspense } from "react";
import { ClockLoader } from "react-spinners";
import { ContainerSpinner } from "./src/Pages/Home/styles";
import { Cores } from "./src/styles";



const Perfil = lazy(() => import('./src/Pages/Perfil'));
const Home = lazy(() => import('./src/Pages/Home'));
const Rotas = () => (
    <Suspense fallback={
			<ContainerSpinner>
								<ClockLoader size={80} color={`${Cores.pink}`} />
								<p>Carregando...</p>
			</ContainerSpinner>
		}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/perfil/:id" element={<Perfil />}/>
      </Routes>
    </Suspense>
)


export default Rotas
