import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ItensCardapio } from '../Interfaces/itensCardapio'
type Product = {
  id: number
  price: number
}
type PurchasePayload = {
  products: Product[]
  delivery: {
    reciver: string
		address:{
			description?: string,
				city: string,
				zipCode: string,
				number: number,
				complement: string
		}
  }
	payment: {
		card: {
		name: string,
		number: string,
		code: string,
		expires: {
		month: number,
		year: number
			}	
		}
	}
}
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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
	})
})

export const {useGetRestaurantesQuery, useGetRestauranteQuery, usePurchaseMutation} = api


export default api
