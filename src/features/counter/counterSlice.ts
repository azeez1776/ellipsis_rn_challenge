// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        cartItems:[]
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        addToCart:(state, action) => {
            const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
            );
            if(itemIndex>=0){
                state.cartItems[itemIndex].quantity =+1 ;
            }
            else{
                const tempItem = {...action.payload, quantity:1};
                state.cartItems.push(tempItem)
            }
        }
    }
}
)

export const { increment, addToCart } = counterSlice.actions;
export default counterSlice.reducer;