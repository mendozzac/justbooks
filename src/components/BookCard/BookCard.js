import "./BookCard.scss";
import Button from "../Button/Button";

const BookCard = ({ book, actionOnClick }) => {
  return (
    <>
      <div className="card">
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
              {book.volumeInfo.authors.join(", ")}{" "}
            </p>
            <p className="card__price">
              {" "}
              {book.saleInfo.listPrice.amount + "€"}{" "}
            </p>
          </div>
        </div>
        <Button text="Add to favs" className="btn-warning card__fav-button" />
      </div>
    </>
  );
};

export default BookCard;
