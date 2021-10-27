import actionTypes from "../../actions/actionTypes";

const booksReducer = (books, action) => {
  let newBooks;

  if (action.type === actionTypes.loadBooks) {
    newBooks = [...action.books.items];
  } else {
    newBooks = books;
  }
  return newBooks;
};

export default booksReducer;
