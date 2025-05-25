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
				const lunch = state.items.find((item)=>item.id=== action.payload.id)
				if (!lunch) {
        state.items.push(action.payload)
      } else {
        alert('O item ja foi adicionado ao carrinho')
      }
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
		clearCart: (state) => {
      state.items = [];
  		localStorage.setItem('items', JSON.stringify([]));
    },
	}
	
})
export const { add, open,close, remove, clearCart } = cartSlice.actions

export default cartSlice.reducer
