import React, { useReducer, } from "react";
import CartContext from "./cart-context"; 


// const CartContext = React.createContext("")

const initalState={
    addItems:[],
    count :0,
    totalamount: 0,
    
} 

const cartReducer =(state, action)=>{
   switch(action.type){
    case "ADD":
        return{
            ...state,
            addItems: [...state.addItems, action.payload]
        }
    default:
        return state
   }
}

const CartProvider =(props)=>{

    const [state, dispatch] = useReducer(
        cartReducer,
        initalState
      ); 

      const getTotalPrice = (items) => {
        return items.reduce((total, item) => total + parseFloat(item.amount), 0);
      };
      

      const addItemToCartHandler =(item)=>{
        dispatch({type: 'ADD' , payload: item})
      }
      

      const cartContext = {
        addItems: state.addItems,
        count: state.count,
        addItem: addItemToCartHandler,
        totalamount:getTotalPrice(state.addItems)
      };
      
      return (
        <CartContext.Provider value ={cartContext}>
            {props.children}
        </CartContext.Provider>
      )

}

export default CartProvider;