import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navigation from "../../components/Navigation/Navigation";

const MyBooks = () => {
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
