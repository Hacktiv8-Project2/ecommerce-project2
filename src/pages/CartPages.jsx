import React from "react";
import CartBoxComponent from "../components/CartBoxComponent";
import CartItemComponent from "../components/CartItemComponent";

function CartPages() {
  return (
    <div className="md:container md:mx-auto">
      <div>
        <CartItemComponent />
      </div>
    </div>
  );
}

export default CartPages;
