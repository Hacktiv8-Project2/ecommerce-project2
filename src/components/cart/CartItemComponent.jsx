import { useDispatch } from "react-redux";
import { PlusSmallIcon, MinusSmallIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "../../features/cartSlice";
import { Link } from "react-router-dom";

function CartItemComponent({cartProducts}) {
  const dispatch = useDispatch();

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
    // <div>
    //   <div className="flex justify-around">
    //     <div>
    //       {cartProducts.map((item, idx) => (
    //         <div key={idx} className="flex items-center mb-4">
    //           <div className="flex items-center mr-6">
    //             <img
    //               src={item.image}
    //               alt=""
    //               className="w-12 h-12 object-cover mr-4"
    //             />
    //             <div>
    //               <div className="w-[400px]">
    //                 <h3 className="text-lg font-medium">{item.title}</h3>
    //               </div>
    //               <p className="text-gray-500">${item.price}</p>
    //             </div>
    //           </div>
    //           <div className="ml-6 flex space-x-2">
    //             {item.qty > item.stock ? (
    //               <div className="mr-5 text-red-600">
    //                 Kuantitas melebihi stok produk!
    //               </div>
    //             ) : (
    //               ""
    //             )}
    //             <div
    //               className="cursor-pointer select-none text-lg"
    //               onClick={() => decrement(item.id)}
    //             >
    //               -
    //             </div>
    //             <p type="number" className=" text-lg font-medium">
    //               {item.qty}
    //             </p>
    //             <div
    //               className="cursor-pointer select-none text-lg"
    //               onClick={() => increment(item.id)}
    //             >
    //               +
    //             </div>
    //           </div>
    //           <div className="ml-6">
    //             <button
    //               onClick={() => handleRemoveCart(item.id)}
    //               className="  text-red-500 hover:text-red-700"
    //             >
    //               <i class="fa-solid fa-trash-can"></i>
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <table className="w-full">
      <tbody>
        {cartProducts.map((product) => (
          <tr className="grid grid-cols-[1fr_1.5fr] grid-rows-custom-row mb-4 border-b border-gray-300 py-10 md:grid-cols-[max-content_1fr] md:gap-x-10">
            <td className="order-1 col-start-1 col-end-2 row-start-1 row-end-4 w-24 md:w-34">
              <Link to={`/detail/${product.id}`}>
                <img
                  className="w-full h-full object-contain" 
                  src={product.image} 
                  alt={product.title} />
              </Link>
            </td>
            <td className="order-2 col-start-2 col-end-auto h-max">
              <Link to={`/detail/${product.id}`}>
                <h4 className="text-base font-medium md:text-lg">{product.title}</h4>
              </Link>
            </td>
            <td className="order-4 col-start-2 col-end-auto h-max relative mt-3">
              <div className="flex items-center gap-x-3 mb-2">
                <div className="w-max flex border border-gray-300 font-medium py-1 text-sm px-2 gap-x-2 rounded-md">
                  <button
                    onClick={() => decrement(product.id)}>
                    <PlusSmallIcon
                      className="w-5"
                    />
                  </button>
                  <p
                    className="text-center">
                    {product.qty}
                  </p>
                  <button
                    onClick={() => increment(product.id)}>
                    <MinusSmallIcon
                      className="w-5"
                    />
                  </button>
                </div>
                {product.qty > product.stock 
                    && 
                    <p className="text-sm text-[#d7334c]">kuantitas melebihi stok!</p>
                }
              </div>
              <button
                className="flex items-center absolute right-0 -bottom-8 gap-x-1 text-sm font-medium text-gray-700 hover:text-[#d7334c]"
                onClick={() => handleRemoveCart(product.id)}>
                  <TrashIcon className="w-4 -mt-1" />
                  <span>Remove</span>
              </button>
            </td>
            <td className="order-3 h-max">
              <p className="text-[#d7334c] text-sm font-medium md:text-base">
                Rp {product.price}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartItemComponent;
