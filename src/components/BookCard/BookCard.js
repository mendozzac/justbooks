import "./BookCard.scss";
import Button from "../Button/Button";
import { useLocation } from "react-router";
//import { useContext } from "react";
//import BooksContext from "../../store/contexts/BooksContext";

const BookCard = ({ book, actionOnClick, addToFav, removeFromFav }) => {
  const location = useLocation();
  const buttonText =
    location.pathname === "/mybooks" ? "Remove" : "Add to favs";

  return (
    <>
      <div className="card">
        <div onClick={actionOnClick}>
          <img
            className="card__image"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            width="140"
            height="210"
          ></img>
          <div className="card__content">
            <h3 className="card__title">{book.volumeInfo.title}</h3>
            <p className="card__author">
              {" "}
              {book.volumeInfo.authors.slice(0, 2).join(" , ")}{" "}
            </p>{" "}
            <p className="card__price">
              {" "}
              {book.saleInfo.listPrice.amount + "€"}{" "}
            </p>
          </div>
        </div>
        <Button
          text={buttonText}
          className="btn-warning card__fav-button"
          actionOnClick={
            location.pathname === "/mybooks"
              ? () => removeFromFav(book.id)
              : () => addToFav(book)
          }
        />
      </div>
    </>
  );
};

export default BookCard;
