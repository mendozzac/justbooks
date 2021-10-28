import { useCallback, useContext } from "react";
import {
  createBookAction,
  loadBooksAction,
  loadBooksApiLocalAction,
  deleteBookAction,
} from "../store/actions/actionCreators";
import BooksContext from "../store/contexts/BooksContext";

const useBooks = (params) => {
  let { books, dispatch } = useContext(BooksContext);
  const myApi = "https://justmybooks.herokuapp.com/mybooks";

  const loadBooks = useCallback(async () => {
    const bookUrl = `https://www.googleapis.com/books/v1/volumes${params}`;
    const response = await fetch(bookUrl);
    const books = await response.json();
    dispatch(loadBooksAction(books));
  }, [dispatch, params]);

  const loadBooksApiLocal = useCallback(async () => {
    const response = await fetch(myApi);
    const books = await response.json();
    dispatch(loadBooksApiLocalAction(books));
  }, [dispatch]);

  const createBook = useCallback(
    async (book, url) => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      });
      book = await response.json();
      dispatch(createBookAction(book));
    },
    [dispatch]
  );

  const deleteBook = useCallback(
    async (id) => {
      await fetch(`${myApi}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(deleteBookAction(id));
    },
    [dispatch]
  );

  return {
    books,
    loadBooks,
    loadBooksApiLocal,
    createBook,
    deleteBook,
  };
};

export default useBooks;
