import React from 'react'
import { useDispatch } from 'react-redux'
import { setError, setLoading, setSellerProducts, setSellerProductToList } from '../product.slice'
import { addProduct, getSellerProducts } from '../services/product.api'

const useProduct = () => {

    const dispatch = useDispatch()

    const handleAddProduct = async (formdata) => {
        dispatch(setLoading(true))

        try {
            const res = await addProduct(formdata)
            dispatch(setSellerProductToList(res.product))
            return {
                success: true,
                message: res.message
            }
        } catch (err) {
            const message = err?.response?.data?.message || err.message
            dispatch(setError(message))
            return {
                success: false,
                message
            }
        } finally {
            dispatch(setLoading(false))
        }

    }

    const handleGetSellerProduct = async () => {
        dispatch(setLoading(true))

        try {
            const res = await getSellerProducts()
            dispatch(setSellerProducts(res.products))
            dispatch(setLoading(false))
        } catch (err) {
             const message = err?.response?.data?.message || err.message
            dispatch(setError(message))
            return {
                success: false,
                message
            }
        } finally {
            dispatch(setLoading(false))
        }
    }

  return {
    handleAddProduct,
    handleGetSellerProduct
  }
}

export default useProduct