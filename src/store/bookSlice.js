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
    },
    {
      id: 2,
      title: "Sample Book 2",
      author: "Author 2",
      publication_date: "2022-02-01",
      price: 25.0,
      image:
        "https://m.media-amazon.com/images/I/51Se3lYJuoL._SY445_SX342_.jpg",
    },
    {
      id: 3,
      title: "Sample Book 3",
      author: "Author 3",
      publication_date: "2022-03-01",
      price: 30.0,
      image:
        "https://m.media-amazon.com/images/I/51Se3lYJuoL._SY445_SX342_.jpg",
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
