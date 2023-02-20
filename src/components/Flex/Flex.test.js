/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders with child elements", () => {
    const { getByText } = render(
      <Flex>
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>
    );
    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("applies custom class name", () => {
    const { container } = render(<Flex className="test-class">Test</Flex>);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
