import { render, screen } from "@testing-library/react";
import BooksContextProvider from "../../store/contexts/BooksContextProvider";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show two navigation buttons", () => {
      render(
        <BooksContextProvider>
          <Navigation />
        </BooksContextProvider>
      );
      const navigationButtons = screen.getAllByRole("button");

      expect(navigationButtons).toHaveLength(2);
    });
  });
});
