import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navigation from "../../components/Navigation/Navigation";
//import BooksContext from "../../store/contexts/BooksContext";
import { useEffect} from "react";
  import useBooks from "../../hooks/useBooks";

const MyBooks = () => {


  const {books, loadBooksApiLocal } = useBooks();

  useEffect(() => {
    loadBooksApiLocal();
  }, [loadBooksApiLocal]);
  console.log(books);

  return (
    <>
      <h2>My Books</h2>
      <NavLink to="/form" activeClassName="current-section" exact>
        <Button text="+" />
      </NavLink>
      <Navigation />
    </>
  );
};

export default MyBooks;
