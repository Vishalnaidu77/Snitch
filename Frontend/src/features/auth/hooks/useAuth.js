import { useDispatch } from "react-redux"
import { setError, setLoading, setUser } from "../states/auth.slice"
import { register } from "../services/auth.api"

export const useAuth = () => {

    const dispatch = useDispatch()

    const handleRegister = async (fullname, email, contact, password, isSeller) => {
        dispatch(setLoading(true))

        try {
            const res = await register(fullname, email, contact, password, isSeller)
            dispatch(setUser(res.user))
            dispatch(setLoading(false))
        } catch (err) {
            dispatch(setError(err.message))
            return err.message
        } finally{
            dispatch(setLoading(false))
        }
    }

    return {
        handleRegister
    }
}
