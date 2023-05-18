import React, { useEffect } from "react";
import { setCheckout, clearCart } from "../features/cartSlice";
import { useNavigate } from "react-router";

function CartBoxComponent({ cartProduct, dispatch }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(setCheckout(cartProduct));
    navigate("/");
  };

  return (
    <>
      <div className="border items-end w-fit">
        <div className="px-4 py-2">
          <div className="flex self-end w-40 border-b mb-2 border-blue-700 text-lg font-bold">
            Quantity :
            {cartProduct.reduce((sum, item) => {
              return sum + item.qty;
            }, 0)}
          </div>
          <div className="flex self-end w-40 border-b mb-2 border-blue-700 text-lg font-bold">
            Price : $
            {cartProduct.reduce((sum, item) => {
              return sum + item.price;
            }, 0)}
          </div>
          <div className="flex self-end w-40 border-b mb-2 border-blue-700 text-lg font-bold">
            Total : $
            {cartProduct
              .reduce((sum, item) => {
                return sum + item.qty * item.price;
              }, 0)
              .toFixed(2)}
          </div>
          <div className="text-center">
            <button
              onClick={() => handleCheckout()}
              className="mt-4 bg-blue-700 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartBoxComponent;
