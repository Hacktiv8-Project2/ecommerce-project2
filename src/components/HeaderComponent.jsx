import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 mb-6">
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
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-white rounded  md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-300"
                }
              >
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>Cart
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-white rounded  md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-300"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "block py-2 pl-3 pr-4 text-white rounded  md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-300"
                }
              >
                Logout
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
