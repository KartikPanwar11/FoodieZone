//created multiple slices like add,remove and empty the cart

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state, action)=>{
            for (let index = state.items.length - 1; index >= 0; index -= 1) {
                const item = state.items[index];
                if (item.id === action.payload.id || item.name === action.payload.name) {
                    state.items.splice(index, 1);
                    break;
                }
            }
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;

