import React from 'react';

// const CartContext = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {}
// });

// export default CartContext; 

const CartContext = React.createContext({
    addItems:[],
    totalamount:0,
    addItem:(item) =>{},
    removeItem:(id) =>{}
})

export default CartContext