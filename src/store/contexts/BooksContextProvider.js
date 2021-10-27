import BooksContext from "./BooksContext";
import { useReducer, useState } from "react";
import booksReducer from "../reducers/bookReducer/booksReducer";

const BooksContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, []);
  const [page, setPage] = useState(0);

  const [startIndex, setStartIndex] = useState(0);
  const resetIndex = () => {
    setStartIndex(0);
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
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
