import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Given a Footer component", () => {
  describe("When it renders", () => {
    test("Then it should render 'JustDevelopers ©2021", () => {
      const text = "JustDevelopers ©2021";

      render(<Footer />);
      const footer = screen.getByText(text);

      expect(footer).toBeInTheDocument();
    });
  });
});
