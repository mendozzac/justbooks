import "./DetailPage.scss";
import Button from "../../components/Button/Button";
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";

const DetailPage = () => {
  const params = useParams();

  const bookId = params.id;

  const [book, setBook] = useState(null);

  const getBook = useCallback(async () => {
    const bookUrl = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
    const response = await fetch(bookUrl);
    const newBook = await response.json();
    await setBook(newBook);
  }, [bookId]);

  useEffect(() => {
    getBook();
  }, [getBook]);

  return (
    book && (
      <div className="detail-content">
        <img
          className="card-img-top"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          width="80"
          height="40"
        ></img>
        <div className="card-body">
          <h3 className="card-title">{book.volumeInfo.title}</h3>
          <p className="card-author">{book.volumeInfo.authors.join(", ")}</p>
          <p className="price"> {book.saleInfo.listPrice.amount + "€"} </p>
        </div>
        <Button text="Add to Cart" />
        <div className="description">{book.volumeInfo.description}</div>
        <ul className="product-details">
          <li> Pages: {book.volumeInfo.pageCount}</li>
          <li> Publisher: {book.volumeInfo.publisher} </li>
        </ul>
      </div>
    )
  );
};

export default DetailPage;
