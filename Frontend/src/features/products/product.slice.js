import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        sellerProduct: [],
        isLoading: false,
        error: null
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setSellerProducts: (state, action) => {
            state.sellerProduct = action.payload
        },
        setSellerProductToList: (state, action) => {
            state.sellerProduct.push(action.payload)
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setProducts, setError, setLoading, setSellerProducts, setSellerProductToList } = productSlice.actions
export default productSlice.reducer