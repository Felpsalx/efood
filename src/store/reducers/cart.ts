import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItensCardapio } from '../../Interfaces/itensCardapio'

const storedItems = JSON.parse(localStorage.getItem('items') || '[]');

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
				state.items.find((item)=>item.id=== action.payload.id)
				state.items.push(action.payload)
				localStorage.setItem('items', JSON.stringify(state.items));
		
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
