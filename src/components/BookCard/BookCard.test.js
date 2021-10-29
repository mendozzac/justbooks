
import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard.js";
import generateBooks from "../../factories/generateBooks";
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'


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

      const history = createMemoryHistory()
      const route = '/home'
      history.push(route)

      render( 
        <Router  history={history}>
          <BookCard book={newBook} />
        </Router>
      );
      const bookCard = screen.getByRole("listitem");

      expect(bookCard).toBeInTheDocument();
    });
  })
});
