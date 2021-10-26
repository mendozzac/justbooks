import actionTypes from "../../actions/actionTypes";

const booksReducer = (books, action) => {
  let newBooks;

  switch (action.type) {
    case actionTypes.loadBooks:
      newBooks = [...action.books];
      break;
    default:
  }
  return newBooks;
};

export default booksReducer;
