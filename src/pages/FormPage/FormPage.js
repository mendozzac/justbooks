import "./FormPage.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";

const FormPage = ({onSubmit}) => {
  const initialData = {
    image: "",
    title: "", 
    author: "",
    publisher: "",
    pages: "",
    description: ""
  };

  const [bookData, setBookData] = useState(initialData);

  const changeData = (event)=> {
    setBookData({
      ...bookData,
      [event.target.id]: event.target.value,
    })
  }

  const resetForm = () => {
    setBookData(initialData)
  };

  const onCreateBook = (event) => {
    event.preventDefault();
    onSubmit(bookData);
    resetForm();
  }

  console.log(bookData);

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
            type="number"
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
            type="file"
            id="image"
            value={bookData.image}
            className="form-control"
            placeholder="Upload"
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            id="description"
            value={bookData.description}
            className="form-control"
            placeholder="Add your description"
            onChange={changeData}
          />
        </div>
        <Button text="Add Book" />
      </form>
    </>
  );
};

export default FormPage;
