import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    categories: [],
    catoriezedItems: [],
    filtredItems: [],
    banners: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts : (state, action) => {
            state.items = action.payload;
        },
        addCategories: (state, action) => {
            state.categories = action.payload;
        },
        addCatoriezedItems : (state, action) => {
            state.catoriezedItems = action.payload;
        },
        addFiltredItems : (state, action) => {
            state.filtredItems = action.payload;
        },
        addBanners : (state, action) => {
            state.banners = action.payload;
        }
    },

});

export const { addProducts, addCategories, addCatoriezedItems, addFiltredItems, addBanners } = productsSlice.actions;
export default productsSlice.reducer;
