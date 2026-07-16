import axios from "axios";

const productApiInstance = axios.create({
    baseURL: "/api/product",
    withCredentials: true,
})

export const addProduct = async (formData) => {
    const res = await productApiInstance.post("/add-product", formData)
    return res.data
}

export const getSellerProducts = async () => {
    const res = await productApiInstance.get("/all-products/seller")
    return res.data
}