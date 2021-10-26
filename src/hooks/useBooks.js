import { useCallback, useContext } from "react";
import { loadBooksAction } from "../store/actions/actionCreators";
import BooksContext from "../store/contexts/BooksContext";

const useBooks = () => {
  let { books, dispatch } = useContext(BooksContext);

  const loadBooks = useCallback(async () => {
    const bookUrl =
      "https://www.googleapis.com/books/v1/volumes?q=subject:art&printType=books&filter=paid-ebooks&startIndex=0&maxResults=10";
    const response = await fetch(bookUrl);
    const books = await response.json();
    dispatch(loadBooksAction(books));
  }, [dispatch]
  );

  return {
    books,
    loadBooks
  };
};

export default useBooks;
