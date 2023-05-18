import React from "react";

function TableComponent() {
  const data = [
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 7", column2: "Data 8", column3: "Data 9" },
  ];
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
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 object-cover mr-4"
                    src="./images/book.jfif"
                    alt=""
                  />
                  <div className="px-6">
                    <div className="font-medium text-lg mb-2">
                      {row.column1}
                    </div>
                    <div className="block text-md mb-2">{row.column1}</div>
                    <p className="text-gray-400 text-base">{row.column1}</p>
                  </div>
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="text-center">{row.column2}</div>
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
