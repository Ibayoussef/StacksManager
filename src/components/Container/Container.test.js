/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Container from "./Container";

describe("Container component", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Container>
        <div>Child 1</div>
        <div>Child 2</div>
      </Container>
    );
    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });
});
