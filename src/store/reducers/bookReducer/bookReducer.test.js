import { loadBooksAction } from "../../actions/actionCreators";
import booksReducer from "./booksReducer";
import generateBooks from "../../../factories/bookFactory";

describe("Given a bookReducer function", () => {
  describe("When it receives a list of books and an action to load books", () => {
    test("Then it should return a list of the loaded books", () => {
      const books = generateBooks();
      const action = loadBooksAction(books);
      console.log(books);
      const newBooks = booksReducer(books, action);

      expect(newBooks).toEqual(books);
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

  // describe("", ()=>{
  //   test("", ()=>{
  //     const Books=getBooks();
  //     const bookToDelete= books[1];
  //     const action=deleteBookAction(bookToDelete.id);

  //     const newBooks = booksReducer(books, action);
  //     expect(newBooks).not.toContain(bookToDelete);

  //   })
  // })
});
