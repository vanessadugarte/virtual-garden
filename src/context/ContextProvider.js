import React, {createContext, useState} from 'react';

const AppContext = createContext();
const ContextProvider = ({children}) => {
    const [state, setState] = useState({
        cartItems:[]
    });

    const updateCartItems = (cartItems) => {
        setState( (prevState) => ({
            ...prevState,
                cartItems
        }))
    }
    const addItemToCart = (obj)=> {
        const list = state.cartItems
        list.push(obj)
        setState( (prevState) => ({
            ...prevState,
            cartItems: list
        }))
    }
    return (
        <AppContext.Provider value={{state, updateCartItems, addItemToCart}}>
            {children}
        </AppContext.Provider>
    );
};

export  {ContextProvider, AppContext};