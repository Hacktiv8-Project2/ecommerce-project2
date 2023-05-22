import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCart } from "../features/cartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { userLogout } from "../features/authSlice";
import Button from "./button/Button";

function NavbarComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const cartCount = useSelector(getAllCart);
  const {isAuthenticated: isUserAuthenticated, token} = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    navigate("/login", {state: location}); 
  }

  const handleLogoutClick = () => {
    dispatch(userLogout());
    navigate("/", {replace: true});
  }

  let button;

  if (isUserAuthenticated) {
    button = (
      <Button
        className="block py-2 pl-3 pr-4 text-white rounded md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-300"
        onClick={handleLogoutClick}>
          Logout
      </Button>
    );

  } else {
    button = (
      <Button
        className="block py-2 pl-3 pr-4 text-white rounded md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-300"
        onClick={handleLoginClick}>
        Login
      </Button>
    )
  }

  return (
    <nav className="bg-gray-800 mb-6 sticky top-0 z-10">
      <div className="mx-auto px-4 py-6 md:py-8 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block md:flex-grow md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-white rounded  md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-300"
                }
              >
                Home
              </NavLink>
              {(token === "admin@bukapedia.com") ? 
                <NavLink
                  to="/recap"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300"
                      : "block py-2 pl-3 pr-4 text-white rounded  md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-300"
                  }
                >
                  Recap
                </NavLink> :
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300"
                      : "block py-2 pl-3 pr-4 text-white rounded  md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-300"
                  }
                >
                  <i class="fa-sharp fa-solid fa-cart-shopping"></i>Cart
                  {cartCount?.length ? (
                    <div className="absolute top-6 l text-xs rounded-full bg-red-500 text-white px-1">
                      {cartCount.length}
                    </div>
                  ) : (
                    <></>
                  )}
                </NavLink>
              }
              {button}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
