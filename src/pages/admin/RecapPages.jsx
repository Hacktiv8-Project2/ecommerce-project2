import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCheck } from "../../features/cartSlice";

function RecapPages() {
  const checkProduct = useSelector(getAllCheck);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead>
          <tr className="bg-blue-500">
            <th className="px-4 py-2">product</th>
            <th className="px-4 py-2">Harga</th>
            <th className="px-4 py-2">Terjual</th>
            <th className="px-4 py-2">Pendapatan</th>
          </tr>
        </thead>
        <tbody>
          {checkProduct?.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 object-cover mr-4"
                    src={item.image}
                    alt=""
                  />
                  <div className="px-6">
                    <div className="font-medium text-lg mb-2">{item.title}</div>
                    <div className="block text-md mb-2">{item.category}</div>
                    <p className="text-gray-400 text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="text-center">{item.price}</div>
              </td>
              <td className="border px-4 py-2">
                <div className="text-center">{item.qty}</div>
              </td>
              <td className="border px-4 py-2">
                <div className="text-center">{item.qty * item.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border text-end font-bold pl-2 pr-10 py-2 bg-blue-500">
        Total Pendapatan :{" "}
        {checkProduct
          .reduce((sum, item) => {
            return sum + item.qty * item.price;
          }, 0)
          .toFixed(2)}
      </div>
    </div>
  );
}

export default RecapPages;
