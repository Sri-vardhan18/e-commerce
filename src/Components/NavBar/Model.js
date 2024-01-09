import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const Model=({isClose})=>{
    const {addItems, totalamount} = useContext(CartContext) 
     


    const closeModal=()=>{
        isClose(false)

    }
    return(
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>          
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white p-4">
                <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
                
                {addItems.map((item, index) => (
                  <div key={item.id} className={`mb-2 flex justify-between ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
                    <span>{item.Title}</span>
                    <span>${item.amount}</span>
                     
                  </div>
                ))}
              </div>
              <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex justify-between">
                <div>Total Amount: {totalamount}</div>
                <button
                  onClick={closeModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default Model