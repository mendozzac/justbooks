import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navigation from "../../components/Navigation/Navigation";
import { useEffect } from "react";
import useBooks from "../../hooks/useBooks";
import BookCard from "../../components/BookCard/BookCard";

const MyBooks = () => {
  const { books, loadBooksApiLocal } = useBooks();

  useEffect(() => {
    loadBooksApiLocal();
  }, [loadBooksApiLocal]);

  return (
    <>
      <h2>My Books</h2>
      <NavLink to="/form" activeClassName="current-section" exact>
        <Button text="+" className="btn-warning mb-4" />
      </NavLink>
      <div className="booklist">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            actionOnClick={() => {}}
            addToFav={() => {}}
          />
        ))}

        <Navigation />
      </div>
    </>
  );
};

export default MyBooks;
