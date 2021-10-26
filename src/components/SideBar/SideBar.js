import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <NavLink to="/mybooks" activeClassName="current-section" exact>
          <div className="mybooks-link">My Books</div>
        </NavLink>
        <div className="mybooks-link">Categories</div>
        <ul className="sidebar__categories">
          <li>Art</li>
          <li>Biography</li>
          <li>Children's Books</li>
          <li>Crafts & Hobbies</li>
          <li>Crime & Thriller</li>
          <li>Dictionaries</li>
          <li>Fiction</li>
          <li>Graphic Novels</li>
          <li>History</li>
          <li>Spirituality</li>
          <li>Poetry</li>
          <li>Romance</li>
          <li>Science</li>
          <li>Sport</li>
          <li>Technology</li>
          <li>Teen & Young Adult</li>
          <li>Travel</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
