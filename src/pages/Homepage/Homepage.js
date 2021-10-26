import { useEffect } from "react";
import { useHistory } from "react-router";
import BookCard from "../../components/BookCard/BookCard";
import useBooks from "../../hooks/useBooks";

const Homepage = () => {
  const { books, loadBooks } = useBooks();
  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

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
