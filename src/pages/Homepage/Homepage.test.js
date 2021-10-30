import Homepage from "./Homepage";
import { server } from "../../mocks/server";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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
          <MemoryRouter initialEntries={["/home"]}>
            <Homepage
              listado={`&printType=books&filter=paid-ebooks&startIndex=0&maxResults=10&langRestrict=en`}
              title={"Our Books"}
            />
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
});
