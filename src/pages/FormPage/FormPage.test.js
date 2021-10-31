import { render, screen } from "@testing-library/react";
import FormPage from "./FormPage";
import BooksContextProvider from "../../store/contexts/BooksContextProvider";

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
});
