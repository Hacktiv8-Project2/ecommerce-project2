import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cartSlice";
import { fetchProducts, getAllProduct } from "../features/productSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";

function CardComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isUserLogin = useSelector((state) => state.auth.token);

  const products = useSelector(getAllProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // console.log(products)

  const handleAddToCart = (item) => {
    if (isUserLogin === null) {
      return navigate("/login", { state: location });
    }

    dispatch(addItem(item));
  };

  return (
    <>
      {products?.map((product, idx) => (
        <div key={idx} className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="mx-auto w-[75%] h-[35%]" src={product.image} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>

            <div className="block font-bold px-2 text-md mb-2 bg-yellow-300 rounded-full w-max">
              {product.category}
            </div>
            <p className="text-gray-700 text-base">{product.description}</p>

            <div className="flex justify-end">
              <button className="mt-4 bg-blue-700 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full">
                <Link to={`/detail/${product.id}`}>Detail</Link>
              </button>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 ml-2 bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardComponent;
