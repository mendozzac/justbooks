import "./App.scss";
import Footer from "./components/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DetailPage from "./pages/DetailPage/DetailPage";
import MyCart from "./pages/MyCart/MyCart";
import SideBar from "./components/SideBar/SideBar";
import FormPage from "./pages/FormPage/FormPage";
import Homepage from "./pages/Homepage/Homepage";
import MyBooks from "./pages/MyBooks/MyBooks";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.currentTarget.value);
  }

  const [listado, setListado] = useState(`?q=subject:art&printType=books&filter=paid-ebooks&startIndex=0&maxResults=10&langRestrict=en`);
  const search = () =>{
    setListado(`?q=${searchTerm}&printType=books&filter=paid-ebooks&startIndex=0&maxResults=10&langRestrict=en`);
  }
  

  

  return (
    <>
      <Router>
        <header className="header">
          <div className="container header-container">
            <div className="topLinks">
              <nav className="header__burger">
                <SideBar />
              </nav>
              <NavLink to="/home" activeClassName="current-section" exact>
                <h1 className="logo">JustBooks</h1>
              </NavLink>
              <NavLink
                to="/cart"
                activeClassName="current-section"
                exact
                className="cartButton"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </div>
            <div className="searchBar">
              <input type="text" 
                     value={searchTerm} 
                     onChange={handleChange}
                     />
              <div className="searchButton" onClick={search}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
        </header>
        <main className="main-content">
          <div className="container main-container">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                <Homepage listado={listado}/>
              </Route>
              <Route path="/detail/:id" exact>
                <DetailPage />
              </Route>
              <Route path="/cart" exact>
                <MyCart />
              </Route>
              <Route path="/mybooks" exact>
                <MyBooks />
              </Route>
              <Route path="/form" exact>
                <FormPage />
              </Route>
            </Switch>
          </div>
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
