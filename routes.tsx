import { Route, Routes } from "react-router-dom"
//import Perfil from './src/Pages/Perfil'
//import Home from "./src/Pages/Home"
import { lazy, Suspense } from "react";




const Perfil = lazy(() => import('./src/Pages/Perfil'));
const Home = lazy(() => import('./src/Pages/Home'));
const Rotas = () => (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/perfil/:id" element={<Perfil />}/>
      </Routes>
    </Suspense>
)


export default Rotas
