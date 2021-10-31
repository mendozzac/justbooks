import { server } from "../../mocks/server";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import BooksContextProvider from "../../store/contexts/BooksContextProvider";
import MyBooks from "./MyBooks";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe.only("Given a MyBooks component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the names of the books and their authors", async () => {
      render(
        <BooksContextProvider>
          <MemoryRouter initialEntries={["/mybooks"]}>
            <MyBooks />
          </MemoryRouter>
        </BooksContextProvider>
      );

      const text1 = await screen.findByText("Harry");
      const text2 = await screen.findByText("Harriett");
      await waitFor(() => {
        expect(text1).toBeInTheDocument();
        expect(text2).toBeInTheDocument();
      });
    });
  });

  describe("When the user clicks on delete the first book", () => {
    test("Then it shouldn't show the name of the first book", async () => {
      render(
        <BooksContextProvider>
          <MemoryRouter initialEntries={["/mybooks"]}>
            <MyBooks />
          </MemoryRouter>
        </BooksContextProvider>
      );
      const buttons = await screen.findAllByText("Remove");
      userEvent.click(buttons[0]);
      await waitForElementToBeRemoved(() => screen.getByText("Harry"));
      const text = screen.queryByText("Harry");
      expect(text).not.toBeInTheDocument();
    });
  });
});
