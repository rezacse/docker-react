import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders new feature", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/New feature XX/i);
  expect(linkElement).toBeInTheDocument();
});
