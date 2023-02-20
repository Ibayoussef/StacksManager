/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Loading />);
    const loadingContainer = getByTestId("loading-container");
    expect(loadingContainer).toBeInTheDocument();
  });

  test("renders with demo props", () => {
    const { getByTestId } = render(<Loading demo />);
    const loadingContainer = getByTestId("loading-container");
    expect(loadingContainer).toBeInTheDocument();
  });
});
