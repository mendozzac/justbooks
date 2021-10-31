import { render, screen } from "@testing-library/react";
import FormPage from "./FormPage";
import BooksContextProvider from "../../store/contexts/BooksContextProvider";
import userEvent from "@testing-library/user-event";

describe("Given a FormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show a form", () => {
      render(
        <BooksContextProvider>
          <FormPage />
        </BooksContextProvider>
      );
      const titleInput = screen.getByRole("textbox", {
        name: "Title",
      });

      expect(titleInput).toBeInTheDocument();
    });
  });
  describe("When the user hasn't typed", () => {
    test("Then it should have a disabled button", () => {
      render(
        <BooksContextProvider>
          <FormPage />
        </BooksContextProvider>
      );
      const addButton = screen.getByRole("button", {
        name: "Add Book",
      });

      expect(addButton).toBeDisabled();
    });
  });

  describe.skip("When the user has typed in all the fields", () => {
    test("Then it shouldn't have a disabled button", () => {
      render(
        <BooksContextProvider>
          <FormPage />
        </BooksContextProvider>
      );

      const textInputs = screen.getAllByRole("textbox");
      // const pagesInput = screen.getAllByRole("spinbutton");

      textInputs.forEach((textInput) => userEvent.type(textInput));

      //userEvent.type(pagesInput);
      screen.debug();
      const addButton = screen.getByRole("button", {
        name: "Add Book",
      });

      expect(addButton).not.toBeDisabled();
    });
  });
});
