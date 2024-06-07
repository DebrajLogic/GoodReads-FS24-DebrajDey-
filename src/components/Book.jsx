import React from "react";
import { Link } from "react-router-dom";

function Book({ book }) {
  const link = book?.image;
  return (
    <div className="bg-gray-200 ">
      <div className="w-52">
        <img className="w-full object-contain" src={link} alt="book-image" />
      </div>

      <h3 className="text-xl font-semibold px-4 py-2">{book?.title}</h3>

      <div className="px-4 py-2">
        <Link to={`/book-details/${book.id}`}>
          <button className="w-full px-4 py-1 rounded bg-gray-800 text-gray-100 font-semibold hover:bg-yellow-500 hover:text-black">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Book;
