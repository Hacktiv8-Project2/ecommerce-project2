import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../features/productSlice";
import { useState, React } from "react";

function DetailPages() {
  const { productId } = useParams();
  const product = useSelector((state) => getProductById(state, productId));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  // const handleSizeChange = (e) => {
  //   setSelectedSize(e.target.value);
  // };

  // const handleAddToCart = () => {
  //   // Add your logic to add the selected product to the cart
  //   console.log("Add to Cart clicked");
  //   console.log("Selected Size:", selectedSize);
  //   console.log("Quantity:", quantity);
  // };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, category, description, image, price } = product;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <img src={image} alt={title} className="w-full md:w-1/3 h-auto" />

          <div className="p-6 md:w-2/3">
            <nav className="text-sm mb-4">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-blue-500 hover:underline">
                    Home/ 
                  </Link>
                </li>
                <li className="text-gray-500">{category}</li>
              </ol>
            </nav>

            <h2 className="text-2xl font-bold mb-2">{title}</h2>

            <p className="text-gray-800 text-lg font-bold mb-4">
              ${price}
            </p>
            
            <div className="flex items-center mb-2">
              <label className="mr-2 text-gray-600">Quantity:</label>
              <input
                type="number"
                min="1"
                className="w-16 px-2 py-1 border rounded"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mb-4">
              Add to Cart
            </button>

            <h3 className="text-l font-bold mb-2">PRODUCT DETAILS</h3>

            <p className="text-gray-800 mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPages;