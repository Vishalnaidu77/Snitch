import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState: {
        sellerProduct: [],
        isLoading: false,
        error: null
    },
    reducers: {
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

export const { setError, setLoading, setSellerProducts, setSellerProductToList } = productSlice.actions
export default productSlice.reducer