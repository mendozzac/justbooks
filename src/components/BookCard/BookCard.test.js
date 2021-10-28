
import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard.js";
import generateBooks from "../../factories/generateBooks";

describe.skip("Given a BookCard component", () => {
  describe("When it receives a book", () => {
    test("Then it should render a card", () => {
      const books = generateBooks();
      const newBook = books[0];

      render(<BookCard book={newBook} />);
      const bookCard = screen.getByRole("listitem");

      expect(bookCard).toBeInTheDocument();
    });
  })
});
