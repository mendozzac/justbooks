import { useEffect } from "react";
import { useHistory } from "react-router";
import BookCard from "../../components/BookCard/BookCard";
import useBooks from "../../hooks/useBooks";

const Homepage = ({listado}) => {

  const { books, loadBooks } = useBooks(listado);
  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  //loadBooks();

  const history = useHistory();

  const goToBookDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <>
      <h2>Our Picks</h2>
      <div className="booklist">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            actionOnClick={() => goToBookDetail(book.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
