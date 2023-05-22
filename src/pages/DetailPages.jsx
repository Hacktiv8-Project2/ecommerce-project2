import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { getProductById } from "../features/productSlice";
import { useState, React } from "react";
import { addItem } from "../features/cartSlice";

function DetailPages() {
  const { productId } = useParams();
  const product = useSelector((state) => getProductById(state, productId));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isUserLogin = useSelector((state) => state.auth.token);
  
  const handleAddToCart = () => {
    if (isUserLogin === null) {
      return navigate("/login", { state: location });
    }
    
    const productToAdd = {
      ...product,
      quantity: parseInt(quantity),
    };
  
    for (let i = 0; i < productToAdd.quantity; i++) {
      dispatch(addItem(productToAdd));
    }
  };  
  

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, category, description, image, price, stock } = product;

  return (
    <div className="w-screen bg-white flex items-center justify-center">
      <div className="max-screen w-full bg-white rounded-lg overflow-hidden">
        <div className="md:flex mt-6 ml-6">
          <img src={image} alt={title} className="mx-auto h-[400px] w-64 md:w-1/3 object-contain shadow-lg rounded-lg" />

          <div className="p-6 md:w-2/3">
            <nav className="text-sm mb-4">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-blue-500 hover:underline">
                    Home
                  </Link>
                </li>
                <li className="text-gray-500">/{category}</li>
              </ol>
            </nav>

            <h2 className="text-2xl font-bold mb-2">{title}</h2>

            <p className="text-gray-800 text-lg font-bold mb-4">
              ${price}
            </p>
            <p className="text-gray-800 text-lg font-bold mb-4">Available: {stock} pcs</p>
            <div className="flex items-center mb-2">
              <select
                className="w-29 px-2 py-1 border rounded"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
            
            <div className="flex items-center mb-4">
              <input
                type="number"
                min="1"
                className="w-16 px-2 py-1 border rounded mr-2"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

            </div>


            <h3 className="text-l font-bold mb-2">PRODUCT DETAILS</h3>

            <p className="text-gray-800 mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPages;
