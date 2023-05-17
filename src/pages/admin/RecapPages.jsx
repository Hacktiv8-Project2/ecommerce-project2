import React from "react";

function RecapPages() {
  const data = [
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 7", column2: "Data 8", column3: "Data 9" },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">product</th>
            <th className="px-4 py-2">Harga</th>
            <th className="px-4 py-2">Terjual</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{row.column1}</td>
              <td className="border px-4 py-2">{row.column2}</td>
              <td className="border px-4 py-2">{row.column3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecapPages;
