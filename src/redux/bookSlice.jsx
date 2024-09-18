import { createSlice } from '@reduxjs/toolkit';
import { books } from '../utils/books';
import { save_Books, load_Books } from '../utils/local_data';


const initialState = {
  books: load_Books() || books
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload, id: state.books.length + 1 });
      save_Books(state.books);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;