import ProductRow from "./ProductRow";

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
          {products?.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
