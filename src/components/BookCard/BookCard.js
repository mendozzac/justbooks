import "./BookCard.scss";

const BookCard = ({ book, actionOnClick }) => {
  return (
    <div className="card" onClick={actionOnClick}>
      <img
        className="card__image"
        src={book.volumeInfo.imageLinks.thumbnail}
        alt="loacting the voice in the film"
        width="150"
        height="210"
      ></img>
      <div className="card__content">
        <h3 className="card__title">{book.volumeInfo.title}</h3>
        <p className="card__author"> {book.volumeInfo.authors.join(", ")} </p>
        <p className="card__price"> {book.saleInfo.listPrice.amount + "€"} </p>
      </div>
    </div>
  );
};

export default BookCard;
