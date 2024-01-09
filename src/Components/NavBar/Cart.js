import { useContext, useState } from "react";
import React  from "react";
import Model from "./Model";
import CartContext  from "../../store/cart-context";

const Cart = () => {
  const [isModel, setIsModel]= useState(false)
  const {count} = useContext(CartContext)
  const closeModel =()=>{
    setIsModel(false)
  }

  return (
    <div>
      <nav className="bg-gray-800 p-4 mb-10">
        <div className="flex justify-between items-center">
          <div className="text-white ml-20">DilFood</div>
          <button className=" flex bg-blue-500 text-white px-4 py-2 rounded-full" onClick={()=>setIsModel(true)}>
            🛒
            <div className="ml-2">{count}</div>
          </button>
        </div>
      </nav>
      {isModel && <Model isClose={closeModel} />}
      

    </div>
  );
};

export default Cart;
