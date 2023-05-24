import React from "react";
import { useSelector } from "react-redux";
import TableComponent from "../../components/table/TableComponent";
import { getAllProduct } from "../../features/productSlice";

function AdminHomePages() {
  const products = useSelector(getAllProduct);

  return (
    <div className="md:container md:mx-auto">
      <TableComponent products={products} />
    </div>
  );
}

export default AdminHomePages;
