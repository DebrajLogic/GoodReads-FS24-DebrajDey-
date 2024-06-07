import React from "react";

function BookDetails() {
  const link =
    "https://m.media-amazon.com/images/I/51Se3lYJuoL._SY445_SX342_.jpg";
  return (
    <div className="h-full p-8 flex gap-4 bg-gray-300">
      <div className="flex-2">
        <div className="p-4 bg-gray-200 shadow-lg">
          <img className="rounded" src={link} alt="" />
        </div>
      </div>
      <div className="flex-1 flex-col">
        <div className="m-4 mb-6 p-5 flex flex-col gap-4 bg-gray-200 border shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-600">Book Name</h3>
          <h4 className="text-2xl font-medium text-gray-400">
            Author Name: Amily
          </h4>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore ullam rem mollitia suscipit necessitatibus nisi harum
            repellendus, dicta doloremque cum eum accusamus, ea laudantium
            excepturi dolor eius maiores a assumenda quo aliquam! Minima fugit,
            unde provident dolore earum doloribus, fugiat assumenda soluta
            quaerat in natus error asperiores perferendis iusto iste recusandae,
            nam temporibus corporis cupiditate esse? Suscipit distinctio
            facilis, ipsa a rerum nostrum minima sed expedita consectetur ab,
            officia repudiandae dicta commodi id nulla ex laborum, nesciunt
            perferendis? Quisquam, dolore natus temporibus doloribus officia
            similique aperiam repellat doloremque consequatur dolor optio
            ducimus eaque veritatis? Fugit quo expedita dicta rem.
          </p>
        </div>
        <div className="m-4 mt-6 p-5 flex flex-col gap-4 bg-gray-200 border shadow-lg">
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
