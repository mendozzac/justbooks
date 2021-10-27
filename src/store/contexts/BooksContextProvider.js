import BooksContext from "./BooksContext";
import { useReducer, useRef, useState } from "react";
import booksReducer from "../reducers/bookReducer/booksReducer";

const BooksContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, []);
  const [page, setPage] = useState(0);
  const query = useRef("");
  const [title, setTitle] = useState("Our Books");

  const [startIndex, setStartIndex] = useState(0);
  const resetIndex = () => {
    setStartIndex(0);
  };

  const resetQuery = () => {
    query.current = "";
  };

  const resetHomepage = () => {
    resetIndex();
    resetQuery();
    setTitle("Our Books");
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        dispatch,
        page,
        setPage,
        startIndex,
        setStartIndex,
        resetIndex,
        query,
        resetQuery,
        resetHomepage,
        title,
        setTitle,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
