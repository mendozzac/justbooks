import "./App.css";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
