import React from "react";

function Book() {
  const link =
    "https://m.media-amazon.com/images/I/51Se3lYJuoL._SY445_SX342_.jpg";
  return (
    <div className="bg-gray-200 hover:bg-gray-300">
      <div className="w-52">
        <img className="w-full object-contain" src={link} alt="" />
      </div>

      <h3 className="text-xl font-semibold px-4 py-2">Launch</h3>

      <div className="px-4 py-2">
        <button className="w-full px-4 py-1 rounded bg-gray-800 text-gray-100 font-semibold">
          Show Details
        </button>
      </div>
    </div>
  );
}

export default Book;
