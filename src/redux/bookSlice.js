import { createSlice } from '@reduxjs/toolkit';
import { books } from '../utils/books';

const initialState = {
  books: books
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload, id: state.books.length + 1 });
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
