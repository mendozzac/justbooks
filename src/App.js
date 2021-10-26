import "./App.scss";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookCard from "./components/BookCard/BookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DetailPage from "./pages/DetailPage/DetailPage";
import MyCart from "./pages/MyCart/MyCart";
import Navigation from "./components/Navigation/Navigation";

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
          <div className="container main-container">
            <Switch>
              <Route path="/DetailPage" exact>
                <DetailPage />
              </Route>
              <Route path="/MyCart" exact>
                <MyCart />
              </Route>
            </Switch>
            <BookCard />
          </div>
          <Navigation />
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
