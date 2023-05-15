import React from "react";

function CardComponent() {
  // const { title, description, imageSrc, buttonText, buttonLink } = props;
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full" src="./images/book.jfif" alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <div className="block font-bold px-2 text-md mb-2 bg-yellow-300 rounded-full w-max">
            Seller
          </div>
          <p className="text-gray-700 text-base">description</p>
          <div className="flex justify-end">
            <button className="mt-4 bg-blue-700 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full">
              <a href="">Detail</a>
            </button>
            <button className="mt-4 ml-2 bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <a href="">Add to cart</a>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full" src="./images/book.jfif" alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <div className="block font-bold px-2 text-md mb-2 bg-yellow-300 rounded-full w-max">
            Seller
          </div>
          <p className="text-gray-700 text-base">description</p>
          <div className="flex justify-end">
            <button className="mt-4 bg-blue-700 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full">
              <a href="">Detail</a>
            </button>
            <button className="mt-4 ml-2 bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <a href="">Add to cart</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
