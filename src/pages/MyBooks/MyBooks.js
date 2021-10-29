import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import useBooks from "../../hooks/useBooks";
import BookCard from "../../components/BookCard/BookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const MyBooks = () => {
  const { books, loadBooksApiLocal } = useBooks();
  const { deleteBook } = useBooks();

  const removeFromFav = (id) => {
    const deleteBookToMyBooks = deleteBook(id);
    return deleteBookToMyBooks;
  };

  useEffect(() => {
    loadBooksApiLocal();
  }, [loadBooksApiLocal]);

  return books ? (
    books.length ? (
      <>
        <div className="header-subtitle container">
          <h2>My Books</h2>
          <NavLink to="/form" activeClassName="current-section" exact>
            <Button text="+" className="btn-warning" />
          </NavLink>
        </div>

        <p> Currently you have {books.length} favourite books you can buy. </p>

        <ul className="booklist">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              actionOnClick={() => {}}
              addToFav={() => {}}
              removeFromFav={removeFromFav}
            />
          ))}
        </ul>
      </>
    ) : (
      <div className="container text-center mt-5">
        <FontAwesomeIcon icon={faSpinner} spin />
        <span className="sr-only">Loading...</span>
      </div>
    )
  ) : (
    <div className="text-center mt-5">No results</div>
  );
};

export default MyBooks;
