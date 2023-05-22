import { useState } from "react";
import Button from "./button/Button";
import { updateStock } from "../features/productSlice";
import { useDispatch } from "react-redux"

export default function ProductRow({ product }) {
  const dispatch = useDispatch();

  const [stock, setStock] = useState(product.stock);

  const handleStockChange = (event) => {
    setStock(Number(event.target.value));
  }

  const handleUpdateStock = (id) => {
    dispatch(updateStock({id, stock}));
  }

  return (
    <tr>
      <td className="border px-4 py-2">
        <div className="flex items-center">
          <img
            className="w-16 h-16 object-cover mr-4"
            src={product.image}
            alt={product.title}
          />
          <div className="px-6">
            <div className="font-medium text-lg mb-2">{product.title}</div>
            <div className="block text-md mb-2">{product.category}</div>
            <p className="text-gray-400 text-base">
              {product.description}
            </p>
          </div>
        </div>
      </td>
      <td className="border px-4 py-2">
        <div className="text-center">
          <input 
            value={stock} 
            type="number"
            onChange={handleStockChange} />
        </div>
      </td>
      <td className="border px-4 py-2">
        <div className="text-center">
          <Button
            className="bg-blue-700 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full"
            type="button"
            onClick={() => handleUpdateStock(product.id)}>
              Update
          </Button>
        </div>
      </td>
    </tr>
  )
}