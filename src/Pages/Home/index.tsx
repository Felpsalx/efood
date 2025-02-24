import { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import ListProduct from '../../Components/ListProducts'



export interface ItensCardapio  {
  titulo?: string
  nome?:string
  capa?: string
  avaliacao?: number
  id?: number
  descricao:string
  tipo?:string[]
  foto: string
  destacado?:boolean;
  porcao?: string
  preco?: number
}
export default function Home() {
  const [list, setList] = useState<ItensCardapio[]>([])
  useEffect(()=> {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then((res) => res.json()).then((res) => setList(res) )

  }, [])

  return (
    <div>
      <Header />
        <ListProduct lists={list}/>
    </div>
  )
}
