import "./FormPage.scss";
const FormPage = () => {
  return (
    <>
    <form autoComplete="off">
      <div className="form-group">
        <label htmlFor="number">Title</label>
        <input type="text" id="number" className="form-control required" placeholder="Book Title" required /> 
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input type="text" id="author" className="form-control required" placeholder="Book Author" required/> 
      </div>
      <div className="form-group">
        <label htmlFor="publisher">Publisher</label>
        <input type="text" id="publisher" className="form-control" placeholder="Book Publisher"/> 
      </div>
      <div className="form-group">
        <label htmlFor="pages">Pages:</label>
        <input type="number" id="pages" className="form-control" placeholder="Book Pages"/>
      </div>
      <div className="form-group">
        <label htmlFor="image">Cover image</label>
        <input type="file" id="image" className="form-control" placeholder="Upload"/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="textarea" id="image" className="form-control" placeholder="Add your description"/>
      </div>
      <button> Add book </button>
    </form>
    </>
  )
}

export default FormPage;