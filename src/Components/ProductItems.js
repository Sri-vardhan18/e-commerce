import React, { useContext } from 'react';

import CartContext from '../store/cart-context';

const ProductItems=({id, Image, Title, amount})=>{
   const context =useContext(CartContext)
  
    const addToCart =(id)=>{
        context.addItem({
            id:id,
            Title: Title,
            amount: amount,
        })
        console.log("context", context)
    }
    return (
      <>
      <div
        key={id}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8 px-4"
      >
        <div className="flex flex-col h-full bg-white p-4 rounded shadow items-center justify-center">
          
          <img
            src={Image}
            alt={Title}
            className="w-120 h-40 mb-4 object-cover rounded"
          />
          <div className="text-center no-underline">{Title}</div>
          <div className="text-center no-underline">{amount}</div>
          <button className="bg-blue-300 text-white px-2 py-1 rounded-full  focus:outline-none" onClick={()=>addToCart( id)}>
            <span className="no-underline text-md size-2">+Add</span>
          </button>
        </div>
      </div>
      </>
    );
}

export default ProductItems