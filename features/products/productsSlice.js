import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    catoriezedItems: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts : (state, action) => {
            state.items = action.payload;
        },
        addCatoriezedItems : (state, action) => {
            state.catoriezedItems = action.payload;
        }
    },

});

export const { addProducts, addCatoriezedItems } = productsSlice.actions;
export default productsSlice.reducer;
