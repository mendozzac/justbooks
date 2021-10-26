import "./App.scss";
import Footer from "./components/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import BookCard from "./components/BookCard/BookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DetailPage from "./pages/DetailPage/DetailPage";
import MyCart from "./pages/MyCart/MyCart";
import SideBar from "./components/SideBar/SideBar";
import FormPage from "./pages/FormPage/FormPage";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <SideBar />
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
          <Router>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                <Homepage />
              </Route>
              <Route path="/DetailPage" exact>
                <DetailPage />
              </Route>
              <Route path="/MyCart" exact>
                <MyCart />
              </Route>
              <Route path="/MyBooks" exact>
                <MyCart />
              </Route>
              <Route path="/FormPage" exact>
                <FormPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </main>
      <footer className="footer">
        <div className="container footer-container">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
