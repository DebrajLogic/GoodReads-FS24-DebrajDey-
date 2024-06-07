import React from "react";
import { Book } from "../components";

function Home() {
  return (
    <div className="p-4 h-full bg-gray-300 flex flex-col items-center ">
      <h1 className="m-5 text-2xl font-semibold text-gray-700 shadow-sm">
        All Books
      </h1>
      <div className="grid grid-cols-4 gap-7">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default Home;
