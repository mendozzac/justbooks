import "./FormPage.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";
import useBooks from "../../hooks/useBooks";
import { Redirect } from "react-router-dom";

const FormPage = () => {
  const { createBook } = useBooks();

  const initialData = {
    image: "",
    title: "",
    author: "",
    publisher: "",
    pages: "",
    description: "",
  };

  const [bookData, setBookData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const checkForm = () => {
    if (
      bookData.image !== "" &&
      bookData.title !== "" &&
      bookData.author !== "" &&
      bookData.publisher !== "" &&
      bookData.pages !== "" &&
      bookData.description !== ""
    ) {
      setIsDisabled(false);
    }
  };

  const changeData = (event) => {
    setBookData({
      ...bookData,
      [event.target.id]: event.target.value,
    });
    checkForm();
  };

  const resetForm = () => {
    setBookData(initialData);
    setIsDisabled(true);
  };

  const onCreateBook = (event) => {
    event.preventDefault();
    const url = "https://justmybooks.herokuapp.com/mybooks";
    const newBook = {
      volumeInfo: {
        title: bookData.title,
        authors: [bookData.author],
        publisher: bookData.publisher,
        description: bookData.description,
        pageCount: bookData.pages,
        imageLinks: {
          thumbnail: bookData.image
            ? bookData.image
            : "https://images-na.ssl-images-amazon.com/images/I/51RTdGBiL6L._SX331_BO1,204,203,200_.jpg",
        },
      },
      saleInfo: {
        listPrice: {
          amount: "0.00",
        },
      },
    };

    createBook(newBook, url);

    resetForm();

    return <Redirect to="/mybooks" />;
  };

  return (
    <>
      <form className="form-create" autoComplete="off" onSubmit={onCreateBook}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={bookData.title}
            className="form-control required"
            placeholder="Book Title"
            onChange={changeData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={bookData.author}
            className="form-control required"
            placeholder="Book Author"
            onChange={changeData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="publisher">Publisher</label>
          <input
            type="text"
            id="publisher"
            value={bookData.publisher}
            className="form-control"
            placeholder="Book Publisher"
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pages">Pages:</label>
          <input
            type="text"
            id="pages"
            value={bookData.pages}
            className="form-control"
            placeholder="Book Pages"
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Cover image</label>
          <input
            type="text"
            id="image"
            value={bookData.image}
            className="form-control"
            placeholder="URL"
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="textarea"
            id="description"
            value={bookData.description}
            className="form-control"
            placeholder="Add your description"
            onChange={changeData}
          />
        </div>

        <Button
          text="Add Book"
          className="addBookButton"
          disabled={isDisabled}
        />
      </form>
    </>
  );
};

export default FormPage;
