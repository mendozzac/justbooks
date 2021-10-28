import "./App.scss";
import Footer from "./components/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard, faStar, faSearch } from "@fortawesome/free-solid-svg-icons";
import DetailPage from "./pages/DetailPage/DetailPage";
import MyCart from "./pages/MyCart/MyCart";
import SideBar from "./components/SideBar/SideBar";
import FormPage from "./pages/FormPage/FormPage";
import Homepage from "./pages/Homepage/Homepage";
import MyBooks from "./pages/MyBooks/MyBooks";
import BooksContext from "./store/contexts/BooksContext";
import useBooks from "./hooks/useBooks";

function App() {
  const {
    page,
    startIndex,
    setStartIndex,
    resetIndex,
    query,
    resetHomepage,
    title,
    setTitle,
  } = useContext(BooksContext);

  const maxResults = 24;

  useEffect(
    () => setStartIndex(page * maxResults, [page]),
    [page, setStartIndex]
  );

  const permanentQueries = useMemo(
    () =>
      `&printType=books&filter=paid-ebooks&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`,
    [startIndex]
  );

  const [listado, setListado] = useState(`?q=subject:art${permanentQueries}`);

  const [searchInput, setSearchInput] = useState("");
  useEffect(
    () =>
      setListado(
        `?q=${
          query.current !== "" ? query.current : "subject:art"
        }${permanentQueries}`
      ),
    [permanentQueries, query, searchInput, startIndex]
  );

  const handleChange = (event) => {
    setSearchInput(event.currentTarget.value);
  };

  const search = () => {
    query.current = searchInput;
    setTitle(searchInput);
    resetIndex();
    setSearchInput("");
    if (searchInput !== "")
      setListado(`?q=${query.current}${permanentQueries}`);
  };

  const {createBook} = useBooks();

  // const createBook = (book) => {
  //   setBooks([
  //     ...books, book
  //   ]);
  // };

  return (
    <>
      <Router>
        <header className="header">
          <div className="container header-container">
            <div className="topLinks">
              <nav className="header__burger">
                <SideBar />
              </nav>
              <NavLink
                to="/home"
                activeClassName="current-section"
                exact
                onClick={resetHomepage}
              >  
                <div className="text-center">
                   <FontAwesomeIcon icon={faHatWizard} color="orange" size="2x"  aria-hidden="true" />
                  <h1 className="logo text"> JustBooks </h1>
                </div>  
              </NavLink>
              
              <NavLink
                to="/mybooks"
                activeClassName="current-section"
                exact
                className="cart-button"
              >
                <FontAwesomeIcon icon={faStar} />
              </NavLink>
            </div>

            <div className="search-bar">
              <input
                className="search-bar__input"
                type="text"
                value={searchInput}
                onChange={handleChange}
                placeholder="Search..."
              />
              <div className="search-button" onClick={search}>
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
                <Homepage listado={listado} title={title} />
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
                <FormPage onSubmit={createBook}/>
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
