/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("renders the logo image", () => {
    const { getByAltText } = render(<Navbar />);
    const logoImage = getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
  });
});
