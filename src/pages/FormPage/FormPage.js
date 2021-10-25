const FormPage = () => {
  return (
    <>
    <form autoComplete="off">
      <div className="form-group">
        <label htmlFor="number">Title</label>
        <input type="text" id="number" className="form-control" placeholder="Book Title"/> 
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input type="text" id="author" className="form-control" placeholder="Book Author"/> 
      </div>
      <div className="form-group">
        <label htmlFor="pages">Pages:</label>
        <input type="number" id="pages" className="form-control" placeholder="Book Pages"/>
      </div>

    </form>
    </>
  )
}

export default FormPage;