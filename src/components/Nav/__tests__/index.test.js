import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  test("renders", () => {
    render(<Nav />);
  });
  //snapshot test
  test("snapshot matches", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  test("inserts emoji into the h2", () => {
    //Arrange
    const { getByLabelText } = render(<Nav />);
    //Assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visable", () => {
  test("inserts text into the links", () => {
    //Arrange
    const { getByTestId } = render(<Nav />);
    //Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
