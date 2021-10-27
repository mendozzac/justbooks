const Navigation = () => {
  return (
    <div className="container d-flex justify-content-center alig-items-center center navigation">
      <nav aria-label="...">
        <ul className="pagination pagination-lg">
          <li className="page-item ">
            <button className="btn btn-secondary carousel-control-prev-icon"></button>
          </li>
          <li className="page-item">
            <button className="btn btn-secondary carousel-control-next-icon"></button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
