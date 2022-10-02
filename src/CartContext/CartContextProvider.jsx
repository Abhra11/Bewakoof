import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import cartReducer from "./reducer";




export const cartContext= createContext();



const CartContextProvider = ({children}) => {
  const [cartState, cartDispatch]= useReducer(cartReducer,{cartData:[]})
  return <cartContext.Provider value={{cartState,cartDispatch}}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
