import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItensCardapio } from '../../Pages/Home'

const storedItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

type CartState = {
  items: ItensCardapio[]
  isOpen: boolean
}
const initialState: CartState = {
  items: storedItems,
  isOpen: false
}

const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers:{
		add:(state, action: PayloadAction<ItensCardapio>)=>{
			const food = state.items.find((item)=>item.id=== action.payload.id)
			if(!food){
				state.items.push(action.payload)
				localStorage.setItem('items', JSON.stringify(state.items));
			}else{
				alert('ja ta ai')
			}
		},
		remove:(state, action: PayloadAction<number>)=>{
			state.items = state.items.filter((item)=> item.id !== action.payload)
			localStorage.setItem('items', JSON.stringify(state.items));
		},
		open:(state)=>{
			state.isOpen = true
		},
		close:(state)=>{
			state.isOpen = false
		},
	}
	
})
export const { add, open,close, remove } = cartSlice.actions

export default cartSlice.reducer
