import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Book } from "../components";
import axios from "axios";
import { addBook } from "../store/bookSlice";

function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        dispatch(addBook(response.data));
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, [dispatch]);

  return (
    <div className="sm:p-4 p-1 h-full bg-gray-300 flex flex-col items-center ">
      <h1 className="m-5 text-2xl font-semibold text-gray-700 shadow-sm">
        All Books
      </h1>
      <div className="grid md:grid-cols-4 md:gap-7 sm:grid-cols-2 sm:gap-5 grid-cols-1 gap-5">
        {books?.map((book) => (
          <Book key={book?.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
