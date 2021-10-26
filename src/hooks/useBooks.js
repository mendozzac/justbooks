import { useCallback, useContext } from "react";
import { loadBooksAction } from "../store/actions/actionCreators";
import BooksContext from "../store/contexts/BooksContext";

const useBooks = (params) => {
  let { books, dispatch } = useContext(BooksContext);

  const loadBooks = useCallback(async () => {
    const bookUrl = `https://www.googleapis.com/books/v1/volumes${params}`;
    const response = await fetch(bookUrl);
    const books = await response.json();
    dispatch(loadBooksAction(books));
  }, [dispatch, params]);

  return {
    books,
    loadBooks,
  };
};

export default useBooks;
