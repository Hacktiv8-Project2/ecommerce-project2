import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cartSlice";
import { fetchProducts, getAllProduct } from "../features/productSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";

function CardComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isUserLogin = useSelector((state) => state.auth.token);
  const [showGoToTop, setShowGoToTop] = useState(false);

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

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShowGoToTop(scrollTop > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {products?.map((product, idx) => (
        <div key={idx} className="max-w-xs rounded overflow-hidden shadow-lg my-10">
          <img className="mx-auto h-[200px] object-contain" src={product.image} alt={product.title} />
          <div className="p-6">
            <div className="font-bold text-xl mb-2 line-clamp-1">{product.title}</div>

            <div className="block font-bold px-2 text-md mb-2 bg-yellow-300 rounded-full w-max">
              {product.category}
            </div>
            <p className="text-gray-700 text-base line-clamp-3">{product.description}</p>

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

      {showGoToTop && (
        <button
          className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md flex items-center"
          onClick={goToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 mr-1"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
          Go to Top
        </button>
      )}

    </>
  );
}

export default CardComponent;
