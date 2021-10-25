<<<<<<< HEAD
import "./App.css";
=======
import "./App.scss";
>>>>>>> c1d6640ab7316b63bb61110e6a7389f148b51417
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookCard from "./components/BookCard/BookCard";

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <div className="container header-container"></div>
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
