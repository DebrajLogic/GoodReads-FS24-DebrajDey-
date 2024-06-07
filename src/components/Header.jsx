import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="px-8 py-3 bg-gray-800 text-gray-100 flex justify-between">
      <div className="flex gap-6 items-center">
        <h3 className="text-xl font-semibold">GoodReads</h3>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="#" className="hover:text-gray-400">
            About
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="bg-gray-300 px-4 py-1 font-semibold text-black rounded-md shadow-lg hover:bg-gray-400"
        >
          Logout
        </button>
      ) : (
        <Link to="/login" className="hover:bg-gray-400 rounded-md">
          <button className="bg-gray-300 px-4 py-1 font-semibold text-black rounded-md shadow-lg hover:bg-gray-400">
            Login
          </button>
        </Link>
      )}
    </div>
  );
}

export default Header;
