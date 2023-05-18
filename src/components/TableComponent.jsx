import React from "react";

function TableComponent({ products }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead>
          <tr className="bg-yellow-400">
            <th className="px-4 py-2">Products</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, idx) => (
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
                <div className="text-center">
                  <input value={item.stock} type="number" />
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="text-center">
                  <button className=" bg-blue-700 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full">
                    <a href="">Update</a>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
