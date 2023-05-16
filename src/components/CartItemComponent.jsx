import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  getAllCart,
  incrementItem,
  removeItem,
} from "../features/cartSlice";

function CartItemComponent() {
  const dispatch = useDispatch();
  const cartProduct = useSelector(getAllCart);
  const handleRemoveCart = (item) => {
    dispatch(removeItem(item));
  };

  const increment = (item) => {
    dispatch(incrementItem(item));
  };
  const decrement = (item) => {
    dispatch(decrementItem(item));
  };
  return (
    <>
      {cartProduct?.map((item, idx) => (
        <div key={idx} className="flex items-center mb-4">
          <div className="flex items-center">
            <img
              src={item.image}
              alt=""
              className="w-12 h-12 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
          <div className="ml-6 flex space-x-2">
            <div
              className="cursor-pointer select-none text-lg"
              onClick={() => decrement(item.id)}
            >
              -
            </div>
            <p className=" text-lg font-medium">{item.qty}</p>
            <div
              className="cursor-pointer select-none text-lg"
              onClick={() => increment(item.id)}
            >
              +
            </div>
          </div>
          <div className="ml-6">
            <button
              onClick={() => handleRemoveCart(item.id)}
              className="  text-red-500 hover:text-red-700"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItemComponent;
