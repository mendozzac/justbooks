import actionTypes from "../../actions/actionTypes";

const booksReducer = (books, action) => {
  let newBooks;

  switch (action.type) {
    case actionTypes.loadBooks:
      newBooks = [...action.books.items];
      break;

    default:
      newBooks = books;
  }
  return newBooks;
};

export default booksReducer;
