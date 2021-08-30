import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesItems: null,
    
};
export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        addCategoriesItems: (state, action) => {
            console.log(action)
            state.categoriesItems = action.payload.filter((el) => el.isCatoriezed);
        }
    }

});
export const { addCategoriesItems } = homeSlice.actions;