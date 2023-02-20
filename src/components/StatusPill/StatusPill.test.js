/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StatusPill from "./StatusPill";

describe("StatusPill", () => {
  test("renders correctly when not shared", () => {
    const { getByText } = render(<StatusPill isShared={false} />);
    expect(getByText("Inactive")).toBeInTheDocument();
  });

  test("renders correctly when shared", () => {
    const { getByText } = render(<StatusPill isShared={true} />);
    expect(getByText("Shared")).toBeInTheDocument();
  });

  test("renders children when provided", () => {
    const { getByText } = render(<StatusPill>My Status</StatusPill>);
    expect(getByText("My Status")).toBeInTheDocument();
  });

  test("calls onClick when clicked and button is true", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <StatusPill button onClick={onClick}>
        Clear Filters
      </StatusPill>
    );
    fireEvent.click(getByText("Clear Filters"));
    expect(onClick).toHaveBeenCalled();
  });
});
