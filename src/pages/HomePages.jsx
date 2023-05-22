// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, getAllProduct } from "../features/productSlice";
import CardsComponent from "../components/cards/CardsComponent";

function HomePages() {
  return (
    <div className="max-w-[1400px] mx-auto px-5">
      <CardsComponent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-max gap-x-5 justify-center" />
    </div>
  );
}

export default HomePages;
