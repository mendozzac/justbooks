import { useEffect } from "react";
import { useHistory } from "react-router";
import BookCard from "../../components/BookCard/BookCard";
import Navigation from "../../components/Navigation/Navigation";
import useBooks from "../../hooks/useBooks";

const Homepage = () => {
  const ourPicks =
    "?q=subject:art&printType=books&filter=paid-ebooks&startIndex=0&maxResults=10&langRestrict=en";
  const { books, loadBooks } = useBooks(ourPicks);
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
      <Navigation />
    </>
  );
};

export default Homepage;
