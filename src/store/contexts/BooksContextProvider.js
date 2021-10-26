import BooksContext from "./BooksContext";
import { useReducer } from "react";
import booksReducer from "../reducers/bookReducer/booksReducer";

const BooksContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, []);
  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
