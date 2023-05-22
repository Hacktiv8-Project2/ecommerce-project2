import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProduct } from "../../features/productSlice";
import CardItemComponent from "./CardItemComponent";

function CardsComponent({ className }) {
  const dispatch = useDispatch();

  const products = useSelector(getAllProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  const productList = [];
  let lastCategory = null;

  products?.forEach((product) => {
    if (product.category !== lastCategory) {
      productList.push(
        <h3 
          className="text-center sm:text-left col-span-full text-2xl capitalize font-medium mt-5">
          {product.category}
        </h3>
      );
    }

    productList.push(
      <CardItemComponent 
        key={product.id} 
        product={product} 
      />
    );

    lastCategory = product.category;
  })

  return (
    <div className={className}>
      {productList}
    </div>
  );
}

export default CardsComponent;
