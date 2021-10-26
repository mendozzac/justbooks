import "./DetailPage.scss";
import Button from "../../components/Button/Button";
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";

const DetailPage = () => {
  const params = useParams();

  const bookId = params.id;

  // const { book, loadBook } = useBook(`/${bookId}`);
  // useEffect(() => {
  //   loadBook();
  // }, [loadBook]);

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

  console.log(book);

  return (
    book && (
      <>
        <img
          className="card-img-top"
          src="http://books.google.com/books/content?id=PP6SDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          alt="loacting the voice in the film"
          width="10"
          height="100"
        ></img>
        <div className="card-body">
          <h3 className="card-title">{book.volumeInfo.title}</h3>
          <p className="card-author"></p>
          <p className="price"> Price </p>
        </div>
        <Button text="Add to Cart" />
        <p className="description">
          {" "}
          "Where is the place of the voice in film? Where others have focused on
          Hollywood film, this volume aims to extend the field to other cinemas
          from around the world, encompassing Latin America, Asia and Africa
          amongst others. Traditional theoretical accounts, based on classical
          narrative cinema, examine the importance of the voice in terms of a
          desired perfect match between visuals and sonic effects. But, as the
          chapters of this volume illustrate, what is normative in one film
          industry may not apply in another. The widespread practices of
          dubbing, postsynch sound and \"playback singing\" in some countries,
          for instance, provide an alternative means of understanding the
          location of the voice in the soundtrack. Through seventeen original
          chapters, this volume situates the voice in film across a range of
          diverse national, transnational and cultural contexts, presenting
          readings which challenge traditional readings of the voice in film in
          exciting new ways. By taking a comparative view, this volume posits
          that the voice may be best understood as a mobile object, one whose
          trajectory follows a broader network of global flows. The various
          chapters explore the cultural transformations the voice undergoes as
          it moves from one industry to another. In doing so, the volume
          addresses sound practices which have been long been neglected, such as
          dubbing and non-synch sound, as well the ways in which sound
          technologies have shaped nationally specific styles of vocal
          performance. In addressing the place of the voice in film, the book
          intends to nuance existing theoretical writing on the voice while
          applying these critical insights in a global context.{" "}
        </p>
        <ul className="product-details">
          <li> Pages: </li>
          <li> Publisher </li>
        </ul>
      </>
    )
  );
};

export default DetailPage;
