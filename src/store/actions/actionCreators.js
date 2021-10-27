import actionTypes from "./actionTypes";

export const loadBooksAction = (books) => ({
  type: actionTypes.loadBooks,
  books,
});

export const loadBookAction = (book) => ({
  type: actionTypes.loadBook,
  book,
});

export const loadBooksApiLocalAction = (books) => ({
  type: actionTypes.loadBooksApiLocal,
  books
});

export const deleteBookAction = (id) => ({
  type: actionTypes.deleteBook,
  id,
});

export const createBookAction = (book) => ({
  type: actionTypes.createBook,
  book,
});
