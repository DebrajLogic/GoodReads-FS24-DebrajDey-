import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/book-details/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 rounded-lg p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Book Not Found!</h2>
          <p className="text-gray-600">
            The book you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-8 flex gap-4 bg-gray-300">
      <div className="flex-2">
        <div className="p-4 bg-gray-100 shadow-lg">
          <img className="rounded" src={book.image} alt={book.title} />
        </div>
      </div>
      <div className="flex-1 flex-col">
        <div className="m-4 mb-6 p-5 flex flex-col gap-4 bg-gray-100 border shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-600">{book.title}</h3>
          <h4 className="text-2xl font-medium text-gray-400">
            Author Name: {book.author}
          </h4>
          <p className="text-lg text-gray-600">{book.description}</p>
        </div>
        <div className="m-4 mt-6 p-5 flex flex-col gap-4 bg-gray-100 border shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-600">
            Rating & Reviews
          </h3>

          <div className="m-4">
            <button className="w-full py-2 bg-yellow-500 rounded-md text-lg hover:bg-yellow-600">
              Write a Review
            </button>
            <hr className="mt-8 border border-gray-300" />
          </div>

          <div>
            <h3 className="text-md font-medium">Displaying 0 Reviews</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
