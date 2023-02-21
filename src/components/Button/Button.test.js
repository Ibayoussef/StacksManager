/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render a button with provided props", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button fontSize={1.5} onClick={onClick}>
        Click Me!
      </Button>
    );
    const button = getByText("Click Me!");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("fontSize: 1.5rem");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
