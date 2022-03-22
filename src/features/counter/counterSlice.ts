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
    }
}
)

export const { increment} = counterSlice.actions;
export default counterSlice.reducer;