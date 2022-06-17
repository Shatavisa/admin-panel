import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest, userRequest } from "./requestMethods";
import { AxiosError } from "axios";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productSlice";


export const login = async (dispatch, user, navigate) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch (err) {
        console.error(err);
        if (err instanceof AxiosError) {
            switch (err.code) {
                case 'ERR_BAD_REQUEST': {
                    dispatch(loginFailure({
                        message: err.response.data === 'Wrong Credentials'
                            ? 'Incorrect username or password'
                            : err.response.data
                    }))
                    break;
                }
                default: {
                    dispatch(loginFailure({
                        message: "Something went wrong"
                    }))
                }
            }
        } else {
            dispatch(loginFailure({
                message: "Something went wrong"
            }))
        }
    }
}

export const getProducts = async (dispatch, user, navigate) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
        // navigate("/")
    } catch (err) {
        dispatch(getProductFailure())
    }
}

export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
        // navigate("/")
    } catch (err) {
        dispatch(deleteProductFailure())
    }
}

export const updateProducts = async (id,product, dispatch) => {
    dispatch(updateProductStart())
    try {
        //const res = await userRequest.get(`/products/${id}`)
        dispatch(updateProductSuccess({id, product}))
        // navigate("/")
    } catch (err) {
        dispatch(updateProductFailure())
    }
}

export const addProducts = async (product, dispatch) => {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/products`, {product})
        dispatch(addProductSuccess(res.data))
        // navigate("/")
    } catch (err) {
        dispatch(addProductFailure())
    }
}