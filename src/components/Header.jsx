import React from "react";

function Header() {
  return (
    <div className="px-8 py-3 bg-gray-800 text-gray-100 flex justify-between">
      <div className="flex gap-6 items-center">
        <h3 className="text-xl font-semibold">GoodReads</h3>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
      </div>
      <button className="bg-gray-300 px-4 py-1 font-semibold text-black rounded-md shadow-lg hover:bg-gray-400">
        Login
      </button>
    </div>
  );
}

export default Header;
