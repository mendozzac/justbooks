import "./BookCard.scss";
import Button from "../Button/Button";
import { useLocation } from "react-router";

const BookCard = ({ book, actionOnClick, addToFav, removeFromFav }) => {
  const location = useLocation();
  const buttonText =
    location.pathname === "/mybooks" ? "Remove" : "Add to Favs";

  return (
    <>
      <li className="card">
        <div onClick={actionOnClick}>
          <img
            className="card__image"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            width="150"
            height="210"
          ></img>
          <div className="card__content">
            <h3 className="card__title">{book.volumeInfo.title}</h3>
            <p className="card__author">
              {" "}
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.slice(0, 2).join(" , ")
                : "No author"}{" "}
            </p>{" "}
            <p className="card__price">
              {" "}
              {book.saleInfo.listPrice
                ? book.saleInfo.listPrice.amount + "€"
                : "Free"}{" "}
            </p>
          </div>
        </div>
        <Button
          text={buttonText}
          className="btn-warning card__fav-button"
          actionOnClick={
            location.pathname === "/mybooks"
              ? () => removeFromFav(book.id)
              : (event) => addToFav(book, event)
          }
        />
      </li>
    </>
  );
};

export default BookCard;
