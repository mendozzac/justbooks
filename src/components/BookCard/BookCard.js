import { NavLink } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <NavLink to="/detail" activeClassName="current-section" exact>
        <img
          className="card__image"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="loacting the voice in the film"
          width="120"
          height="180"
        ></img>
      </NavLink>
      <div className="card__content">
        <h3 className="card__title">{book.volumeInfo.title}</h3>
        <p className="card__author"> {book.volumeInfo.authors.join(", ")} </p>
        <p className="card__price"> {book.saleInfo.listPrice.amount + "€"} </p>
      </div>
    </div>
  );
};

export default BookCard;
