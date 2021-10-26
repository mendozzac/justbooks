import { useEffect } from "react";
import BookCard from "../../components/BookCard/BookCard";
import useBooks from "../../hooks/useBooks";

const Homepage = () => {
  const { books, loadBooks } = useBooks();
  useEffect(() => {
    loadBooks();
  }, [loadBooks]);
  return (
    <>
      <h2>Our Picks</h2>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
};

export default Homepage;
