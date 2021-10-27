import actionTypes from "../../actions/actionTypes";

const booksReducer = (books, action) => {
  let newBooks;

  if (action.type === actionTypes.loadBooks) {
    newBooks = [...action.books.items];
  } else if (action.type === actionTypes.loadBooksApiLocal) {
    newBooks = [...action.books.items];
  } else if (action.type === actionTypes.createBook) {
    newBooks = [...books];
  } else if (action.type === actionTypes.deleteBook) {
    newBooks = books.filter( book => book.id !== action.id)
  } else {
    newBooks = books;
  }
  return newBooks;
};

export default booksReducer;
