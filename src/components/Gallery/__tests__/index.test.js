import React from "react";
const { render, cleanup } = require("@testing-library/react");
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

const portait = {
  name: "portraits",
  description: "Portraits of people in my life",
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
  test("renders", () => {
    render(<Gallery currentCategory={portait} />);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Gallery currentCategory={portait} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders h1 title", () => {
    const { getByTestId } = render(<Gallery currentCategory={portait} />);
    expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
  });
});
