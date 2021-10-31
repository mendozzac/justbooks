import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fontsource/montserrat";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BooksContextProvider from "./store/contexts/BooksContextProvider";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <BooksContextProvider>
      <Auth0Provider
        domain={process.env.REACT_APP_LOGIN_DOMAIN}
        clientId={process.env.REACT_APP_LOGIN_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BooksContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
