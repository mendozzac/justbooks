import {
  createBookAction,
  deleteBookAction,
  loadBooksAction,
} from "../../actions/actionCreators";
import booksReducer from "./booksReducer";
import generateBooks from "../../../factories/generateBooks";

describe("Given a bookReducer function", () => {
  describe("When it receives a list of books and an action to load books", () => {
    test("Then it should return a list of the loaded books", () => {
      const books = generateBooks();

      const action = loadBooksAction(books);

      const newBooks = booksReducer(books, action);

      expect(newBooks).toEqual(books.items);
    });
  });

  describe.skip("When it receives a list of books and an action to create a book", () => {
    test("Then it should add it to the list", () => {
      const books = [];
      const newBook = {
        id: "hi",
        image: "http://placeimg.com/640/480/cities",
        title: "Random",
        author: "Random",
        price: "5.00",
      };
      const action = createBookAction(newBook);

      const newBooks = booksReducer(books, action);

      expect(newBooks).toContain(newBook);
    });
  });

  describe("When it receives a list of books and an action to delete a book", () => {
    test("Then it removes the book from the list", () => {
      const books = generateBooks();
      const bookToDelete = books.items[1];
      const action = deleteBookAction(bookToDelete.id);

      const newBooks = booksReducer(books.items, action);
      expect(newBooks).not.toContain(bookToDelete);
    });
  });
});
