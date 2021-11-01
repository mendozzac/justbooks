
import PropTypes from "prop-types";

const SideBar = ({ actionOnClick }) => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li className="dropdown-item">
            <div className="mybooks-link">Categories</div>
          </li>
          <li className="dropdown-item">
            <ul className="sidebar__categories list-group">
              <li className="list-group-item">
                {" "}
                <a href="Art" onClick={actionOnClick}>
                  {" "}
                  Art{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Cooking" onClick={actionOnClick}>
                  {" "}
                  Cooking{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Crafts & Hobbies" onClick={actionOnClick}>
                  {" "}
                  Crafts & Hobbies{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Drama" onClick={actionOnClick}>
                  {" "}
                  Drama{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Education" onClick={actionOnClick}>
                  {" "}
                  Education{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Fiction" onClick={actionOnClick}>
                  {" "}
                  Fiction{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Gardening" onClick={actionOnClick}>
                  {" "}
                  Gardening{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="History" onClick={actionOnClick}>
                  {" "}
                  History{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Poetry" onClick={actionOnClick}>
                  {" "}
                  Poetry{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Romance" onClick={actionOnClick}>
                  {" "}
                  Romance{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Science" onClick={actionOnClick}>
                  {" "}
                  Science{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Sport" onClick={actionOnClick}>
                  {" "}
                  Sport{" "}
                </a>{" "}
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Technology" onClick={actionOnClick}>
                  {" "}
                  Technology{" "}
                </a>
              </li>
              <li className="list-group-item">
                {" "}
                <a href="Travel" onClick={actionOnClick}>
                  {" "}
                  Travel{" "}
                </a>{" "}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

SideBar.propTypes = {
  actionOnClick: PropTypes.func,
};

export default SideBar;
