import "./BookCard.scss";

const BookCard = () => {
  return (
    <div className="card">
      <img
        className="card__img"
        src="http://books.google.com/books/content?id=PP6SDQAAQBAJ&printsec=frontcover&img=1&edge=curl&source=gbs_api"
        alt="loacting the voice in the film"
      ></img>
      <div className="card__content">
        <h3 className="card__info card__info--title">Title of book</h3>
        <p className="card__info"> Author </p>
        <p className="card__info"> Price </p>
      </div>
    </div>
  );
};

export default BookCard;
