import Homepage from "./Homepage";
import { server } from "../../mocks/server";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import BooksContextProvider from "../../store/contexts/BooksContextProvider";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a Homepage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the names of the books and their authors", async () => {
      render(
        <BooksContextProvider>
          <Homepage />
        </BooksContextProvider>
      );
      const text1 = await screen.findByText("Harry");
      const text2 = await screen.findByText("Harriett");
      expect(text1).toBeInTheDocument();
      expect(text2).toBeInTheDocument();
    });
  });
});
