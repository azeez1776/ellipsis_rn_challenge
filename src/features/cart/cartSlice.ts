// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems:[]
    },
    reducers: {
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

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;