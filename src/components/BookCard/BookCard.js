const BookCard = () => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="http://books.google.com/books/content?id=PP6SDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        alt="loacting the voice in the film"
        width="20"
        height="70"
      ></img>
      <div className="card-body">
        <h3 className="card-title">Title of book</h3>
        <p className="card-author"> Author </p>
        <p className="price"> Price </p>
      </div>
    </div>
  );
};

export default BookCard;
