const BookCard = () => {
  return (
    <div className="card">
      <img className="card-img-top"
           src="http://books.google.com/books/content?id=PP6SDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
           alt="loacting the voice in the film"
           ></img>
      <div className="card-body">     
        <h5 className="card-title">Title of book</h5>
        <p className="card-author"> Author </p>
        <p className="Price"> Price </p>
      </div>
    </div>  
  )
}

export default BookCard;