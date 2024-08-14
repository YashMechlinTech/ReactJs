import { render, screen } from "@testing-library/react";
import App from "./App";

test("Creating my first test case ", () => {
  render(<App/>);
  const text=screen.getByText(/first React test case/i)
  const alttext=screen.getByAltText('image from internet')
  expect(text).toBeInTheDocument()
  expect(alttext).toBeInTheDocument()
});


//slash and i is used for indicating that the case sensitivity should be ignored like F and f should be considered as same . . 