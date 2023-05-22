import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import emptyCartImage from "./../assets/cart-empty.png";

import {
  decrementItem,
  getAllCart,
  incrementItem,
  removeItem,
} from "../features/cartSlice";
import CartBoxComponent from "./CartBoxComponent";

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
      {cartProduct.length ? (
        <div className="flex justify-around">
          <div>
            {cartProduct?.map((item, idx) => (
              <div key={idx} className="flex items-center mb-4">
                <div className="flex items-center mr-6">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 object-cover mr-4"
                  />
                  <div>
                    <div className="w-[400px]">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                    </div>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>
                {/* <div className="flex"> */}
                <div className="ml-6 flex space-x-2">
                  {item.qty > item.stock ? (
                    <div className="mr-5 text-red-600">
                      Kuantitas melebihi stok produk!
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    className="cursor-pointer select-none text-lg"
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </div>
                  <p type="number" className=" text-lg font-medium">
                    {item.qty}
                  </p>
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
                {/* </div> */}
              </div>
            ))}
          </div>
          <CartBoxComponent cartProduct={cartProduct} />
        </div>
      ) : (
        // <div className="justify-center">
        //   <p className="text-xl font-bold text-gray-500">
        //     Anda Belum Memilih Item
        //   </p>
        // </div>

        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center py-10">
            <img src={emptyCartImage} alt="Empty Cart" className="md-auto h-68 mb-4" />
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItemComponent;
