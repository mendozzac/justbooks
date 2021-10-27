import { useContext } from "react";
import BooksContext from "../../store/contexts/BooksContext";
import Button from "../Button/Button";

const Navigation = () => {
  const { page, setPage } = useContext(BooksContext);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="container d-flex justify-content-center alig-items-center center navigation">
      <nav aria-label="...">
        <ul className="pagination pagination-lg">
          <li className="page-item ">
            <Button text="prev" actionOnClick={previousPage} />
          </li>
          <li className="page-item">
            <Button text="next" actionOnClick={nextPage} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
