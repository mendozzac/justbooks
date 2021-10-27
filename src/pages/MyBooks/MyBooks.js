import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navigation from "../../components/Navigation/Navigation";
import { useEffect} from "react";
import useBooks from "../../hooks/useBooks";
import BookCard from "../../components/BookCard/BookCard";
  

const MyBooks = () => {

  const {books, loadBooksApiLocal } = useBooks();

  useEffect(() => {
    loadBooksApiLocal();
  }, [loadBooksApiLocal]);
  console.log(books);

  return (
    <>
      <h2>My Books</h2>

 <div className="booklist">
      <NavLink to="/form" activeClassName="current-section" exact>
         {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            actionOnClick={() => {}}
            addToFav={()=>{}}
          />
          ))}
          <Button text="+" />
      </NavLink>
      <Navigation />
            </div>

    </>
  );
};

export default MyBooks;
