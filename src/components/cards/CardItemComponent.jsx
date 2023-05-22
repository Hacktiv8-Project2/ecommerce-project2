import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addItem } from "../../features/cartSlice";
import Button from "../button/Button";

export default function CardItemComponent({ product }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isUserLogin = useSelector((state) => state.auth.token);

  const handleAddToCart = (product) => {
    if (isUserLogin === null) {
      return navigate("/login", {state: location});
    }

    dispatch(addItem(product));
  }

  return (
    <div className="max-w-xs justify-self-center rounded overflow-hidden border border-slate-200 my-10">
      <Link to={`/detail/${product.id}`}>
        <img className="mx-auto h-[200px] object-contain" src={product.image} alt={product.title} />
      </Link>
      <div className="p-6">
        <Link to={`/detail/${product.id}`}>
          <h4 className="font-bold text-xl mb-2 line-clamp-1">{product.title}</h4>
        </Link>

        <div className="block font-bold px-2 text-md mb-2 bg-yellow-300 rounded-full w-max">
          {product.category}
        </div>
        <p className="text-gray-700 text-base line-clamp-3">{product.description}</p>

        <div className="flex justify-end">
          <Button
            className="mt-4 ml-2 bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => handleAddToCart(product)}>
              Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}