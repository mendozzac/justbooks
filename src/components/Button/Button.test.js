import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Given a Button component", () => {
  describe("When it renders", () => {
    test("Then it should show a button", () => {
      const greet = "hola";

      render(<Button text={greet} />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
    test("Then it should show the text 'hola'", () => {
      const greet = "hola";

      render(<Button text={greet} />);
      const button = screen.getByRole("button", { name: greet });

      expect(button).toBeInTheDocument();
    });
  });
});
