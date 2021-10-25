const BookCard = () => {
  return (
    <div className="card">
      <img
        className="card__image"
        src="http://books.google.com/books/content?id=PP6SDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        alt="loacting the voice in the film"
        width="20"
        height="70"
      ></img>
      <div className="card__content">
        <h3 className="card__title">Title of book</h3>
        <p className="card__author"> Author </p>
        <p className="card__price"> Price </p>
      </div>
    </div>
  );
};

export default BookCard;
