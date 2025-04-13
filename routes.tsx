import { Route, Routes } from "react-router-dom"
import Perfil from './src/Pages/Perfil'
import Home from "./src/Pages/Home"
import React from "react"




const Rotas = () => (

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/perfil/:id" element={<Perfil />}/>
      </Routes>
)


export default Rotas
