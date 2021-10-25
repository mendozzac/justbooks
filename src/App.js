import "./App.scss";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookCard from "./components/BookCard/BookCard";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <div className="container header-container"></div>
        </header>
        <main className="main-content">
          <div className="container main-container">
            <Switch>
                <Route path="/DetailPage" exact>
                    <DetailPage />
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
