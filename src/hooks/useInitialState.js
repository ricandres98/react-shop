import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeItem = (key) => {
        setState({
            ...state,
            cart: state.cart.filter((product) => product.id != key)
        })
    }

    return {
        state,
        addToCart,
        removeItem
    }
}

export default useInitialState;