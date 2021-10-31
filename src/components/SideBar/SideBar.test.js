import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";
import { MemoryRouter } from "react-router-dom";

describe("Given a SideBar component", () => {
  describe("When it renders", () => {
    test("Then it should show a dropdown button", () => {
      const action = jest.fn();

      render(
        <MemoryRouter initialEntries={["/home"]}>
          <SideBar actionOnClick={action} />
        </MemoryRouter>
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
