import DetailPage from "./DetailPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router, MemoryRouter, Route } from "react-router-dom";
import BooksContextProvider from '../../store/contexts/BooksContextProvider';
import { handlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";

beforeAll( () => {
  server.listen();
});

// afterEach( () => {
//   server.resetHandlers();
// });

afterAll( ()=> {
  server.close();
});

describe("Given a DetailPage component", () => {
  describe("When it renders", () => {
    test("Then it should display the details of a fetched book", async() => {
      
        render(
          <BooksContextProvider>
            <MemoryRouter initialEntries={['/detail/MY3QAgAAQBAJ']}> 
              <Route path="/detail/:id" exact> 
                <DetailPage />
              </Route> 
            </MemoryRouter>
          </BooksContextProvider>
        )

      const bookCard = await screen.findAllByAltText("Japanese Things")

      expect(bookCard[0]).toBeInTheDocument();

    })
  })
})