import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../features/productSlice";

function DetailPages() {
  const { productId } = useParams();
  const product = useSelector((state) => getProductById(state, productId));

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, category, description } = product;

  return (
    <div>
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default DetailPages;
