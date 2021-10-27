import { useEffect } from "react";
import { useHistory } from "react-router";
import BookCard from "../../components/BookCard/BookCard";
import Navigation from "../../components/Navigation/Navigation";
import useBooks from "../../hooks/useBooks";

const Homepage = ({listado}) => {

  const { books, loadBooks, createBook } = useBooks(listado);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  const history = useHistory();

  const goToBookDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  const addToFav = (book) => {
  const url ="https://justmybooks.herokuapp.com/mybooks";
  const addBookToMyBooks = createBook(book, url);
  console.log(book)
  return addBookToMyBooks;
  }

  return (
    <>
      <h2>Our Picks</h2>
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
  );
};

export default Homepage;
