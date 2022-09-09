import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Photolist from "..";

describe("Photolist renders", () => {
  test("Photolist is rendering", () => {
    render(<Photolist />);
  });

  test("renders", () => {
    const { asFragment } = render(<Photolist />);
    expect(asFragment()).toMatchSnapshot();
  });
});
