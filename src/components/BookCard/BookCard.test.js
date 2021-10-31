import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard.js";
import generateBooks from "../../factories/generateBooks";
import { MemoryRouter } from "react-router-dom";
import ReactTestRenderer from "react-test-renderer";

describe("Given a BookCard component", () => {
  function mapFrom(bookData) {
    return {
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
  }

  describe("When it receives a book", () => {
    test("Then it should render a card", () => {
      const books = generateBooks();
      const newBook = mapFrom(books.items[0]);

      render(
        <MemoryRouter initialEntries={["/home"]}>
          <BookCard book={newBook} />
        </MemoryRouter>
      );
      const bookCard = screen.getByRole("listitem");

      expect(bookCard).toBeInTheDocument();
    });
  });

  describe("When it recives and object", () => {
    test("then it should render a card with the object info inside", () => {
      const newBook = {
        volumeInfo: {
          title: "Harry",
          authors: ["Potter"],
          publisher: "Magia",
          description: "It's okay",
          pageCount: "100000",
          imageLinks: {
            thumbnail:
              "https://pbs.twimg.com/profile_images/3604358312/e784593ed966bc42476eab53261b8b09_400x400.jpeg",
          },
        },
        saleInfo: {
          listPrice: {
            amount: "0.00",
          },
        },
      };

      const cardComponent = ReactTestRenderer.create(
        <MemoryRouter initialEntries={["/home"]}>
          <BookCard book={newBook} />
        </MemoryRouter>
      );
      expect(cardComponent.toJSON()).toMatchSnapshot();
    });
  });
});
