import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navigation from "../../components/Navigation/Navigation";

const MyBooks = () => {
  return (
    <>
      <h2>My Books</h2>
      <div className="booklist">
        <NavLink to="/form" activeClassName="current-section" exact>
          <Button text="+" />
        </NavLink>
        <Navigation />
      </div>
    </>
  );
};

export default MyBooks;
