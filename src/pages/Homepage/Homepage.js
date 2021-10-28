import { useEffect } from "react";
import { useHistory } from "react-router";
import BookCard from "../../components/BookCard/BookCard";
import Navigation from "../../components/Navigation/Navigation";
import useBooks from "../../hooks/useBooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Homepage = ({ listado, title = "Our Books" }) => {
  const { books, loadBooks, createBook } = useBooks(listado);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  const history = useHistory();

  const goToBookDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  const addToFav = (book) => {
    const url = "https://justmybooks.herokuapp.com/mybooks";
    const addBookToMyBooks = createBook(book, url);
    return addBookToMyBooks;
  };

  return books.length ? (
    <>
      <h2>{title}</h2>
      <div className="booklist">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            actionOnClick={() => goToBookDetail(book.id)}
            addToFav={addToFav}
          />
        ))}
      </div>
      <Navigation />
    </>
  ) : (
    <div className="container text-center mt-5">
      <FontAwesomeIcon icon={faSpinner} spin />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Homepage;
