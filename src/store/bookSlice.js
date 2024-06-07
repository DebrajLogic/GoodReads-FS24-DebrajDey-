import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "Sample Book 1",
      author: "Author 1",
      publication_date: "2022-01-01",
      price: 20.0,
      image:
        "https://m.media-amazon.com/images/I/51Se3lYJuoL._SY445_SX342_.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique labore ullam rem mollitia suscipit necessitatibus nisi harum repellendus, dicta doloremque cum eum accusamus, ea laudantium excepturi dolor eius maiores a assumenda quo aliquam! Minima fugit, unde provident dolore earum doloribus, fugiat assumenda soluta quaerat in natus error asperiores perferendis iusto iste recusandae, nam temporibus corporis cupiditate esse? Suscipit distinctio facilis, ipsa a rerum nostrum minima sed expedita consectetur ab, officia repudiandae dicta commodi id nulla ex laborum, nesciunt perferendis? Quisquam, dolore natus temporibus doloribus officia similique aperiam repellat doloremque consequatur dolor optio ducimus eaque veritatis? Fugit quo expedita dicta rem.",
    },
    {
      id: 2,
      title: "Sample Book 2",
      author: "Author 2",
      publication_date: "2022-02-01",
      price: 25.0,
      image:
        "https://m.media-amazon.com/images/I/51Se3lYJuoL._SY445_SX342_.jpg",
      description: "",
    },
    {
      id: 3,
      title: "Sample Book 3",
      author: "Author 3",
      publication_date: "2022-03-01",
      price: 30.0,
      image:
        "https://m.media-amazon.com/images/I/51Se3lYJuoL._SY445_SX342_.jpg",
      description: "",
    },
    // Add more sample books as needed
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
