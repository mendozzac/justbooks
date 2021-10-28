import {
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

  // describe("and an action to create a book", ()=> {
  //   test("", ()=>{
  //     const books=getBooks();
  //     const book=getBook();
  //     const action = createBookAction(newBook);

  //     const newBook = booksReducer(book, action);

  //     expect(newBooks).toContain(newBook);
  //   })
  // })

  describe("When it receives a book", () => {
    test("Then it removes the book from the list", () => {
      const books = generateBooks();
      const bookToDelete = books.items[1];
      const action = deleteBookAction(bookToDelete.id);

      const newBooks = booksReducer(books.items, action);
      expect(newBooks).not.toContain(bookToDelete);
    });
  });
});
