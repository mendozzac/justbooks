import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

const MyBooks = () => {
  return (
    <>
      <h2>My Books</h2>
      <NavLink to="/form" activeClassName="current-section" exact>
        <Button />
      </NavLink>
    </>
  );
};

export default MyBooks;
