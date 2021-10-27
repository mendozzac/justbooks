import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li className="dropdown-item">
            <NavLink to="/mybooks" activeClassName="current-section" exact>
              <div className="mybooks-link">My Books</div>
            </NavLink>
          </li>
          <li className="dropdown-item">
            <div className="mybooks-link">Categories</div>
          </li>
          <li className="dropdown-item">
            <ul className="sidebar__categories list-group">
              <li className="list-group-item">Art</li>
              <li className="list-group-item">Biography</li>
              <li className="list-group-item">Children's Books</li>
              <li className="list-group-item">Crafts & Hobbies</li>
              <li className="list-group-item">Crime & Thriller</li>
              <li className="list-group-item">Dictionaries</li>
              <li className="list-group-item">Fiction</li>
              <li className="list-group-item">Graphic Novels</li>
              <li className="list-group-item">History</li>
              <li className="list-group-item">Spirituality</li>
              <li className="list-group-item">Poetry</li>
              <li className="list-group-item">Romance</li>
              <li className="list-group-item">Science</li>
              <li className="list-group-item">Sport</li>
              <li className="list-group-item">Technology</li>
              <li className="list-group-item">Teen & Young Adult</li>
              <li className="list-group-item">Travel</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
