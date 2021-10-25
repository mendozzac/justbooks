import "./App.scss";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookCard from "./components/BookCard/BookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <div className="container header-container">
            <div className="topLinks">
              <nav className="header__burger">
                <FontAwesomeIcon icon={faBars} />
              </nav>
              <h1 className="logo">JustBooks</h1>
              <div className="cartButton">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
            <div className="searchBar">
              <input type="text" />
              <div className="searchButton">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
        </header>
        <main className="main-content">
          <div className="container main-container"></div>
        </main>
        <footer className="footer">
          <div className="container footer-container">
            <Footer />
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
