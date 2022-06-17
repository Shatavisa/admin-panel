import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFeching: false,
        error: false,
    },
    reducers: {
        getProductStart: (state) => {
            state.isFeching = true
            state.error = false
        },
        getProductSuccess: (state, action) => {
            state.isFeching = false
            state.products = action.payload
        },
        getProductFailure: (state) => {
            state.isFeching = false
            state.error = true

        },
        deleteProductStart: (state) => {
            state.isFeching = true
            state.error = false
        },
        deleteProductSuccess: (state, action) => {
            state.isFeching = false
            state.products.splice(
                state.products.findIndex(item => item._id === action.payload.id), 1
            )
        },
        deleteProductFailure: (state) => {
            state.isFeching = false
            state.error = true

        },
        updateProductStart: (state) => {
            state.isFeching = true
            state.error = false
        },
        updateProductSuccess: (state, action) => {
            state.isFeching = false
            state.products[
                state.products.findIndex(item => item._id === action.payload.id)
            ] = action.payload.product
        },
        updateProductFailure: (state) => {
            state.isFeching = false
            state.error = true

        },
        addProductStart: (state) => {
            state.isFeching = true
            state.error = false
        },
        addProductSuccess: (state, action) => {
            state.isFeching = false
            state.products.push(action.payload)
        },
        addProductFailure: (state) => {
            state.isFeching = false
            state.error = true

        }
    },
})

export const { 
    getProductStart, 
    getProductSuccess, 
    getProductFailure, 
    deleteProductStart, 
    deleteProductSuccess,
    deleteProductFailure, 
    updateProductStart, 
    updateProductSuccess, 
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure} = productSlice.actions

export default productSlice.reducer