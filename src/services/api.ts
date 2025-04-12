import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ItensCardapio } from '../Interfaces/itensCardapio'


const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl:'https://fake-api-tau.vercel.app/api/efood/'
	}),
	endpoints: (builder)=>({
		getRestaurantes: builder.query<ItensCardapio[], void>({
			query:()=>'restaurantes'
		}),
		getRestaurante: builder.query<ItensCardapio, string>({
			query:(id)=>`restaurantes/${id}`
		}),
	})
})

export const {useGetRestaurantesQuery, useGetRestauranteQuery} = api


export default api
