/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const pagesNumber = [
    [{ id: "1" }, { id: "2" }],
    [{ id: "3" }, { id: "4" }],
    [{ id: "5" }],
  ];
  let state = 0;
  const action = jest.fn((newState) => {
    state = newState + 1;
  });
  const page = { state, action };

  it("renders without error", () => {
    render(<Pagination page={page} pagesNumber={pagesNumber} />);
  });

  it("displays the correct page number", () => {
    const { getByText } = render(
      <Pagination page={page} pagesNumber={pagesNumber} />
    );
    expect(getByText("1")).toHaveClass("active");
  });

  it("clicking 'Prev' button decrements the page number", () => {
    const { getByText } = render(
      <Pagination page={page} pagesNumber={pagesNumber} />
    );
    fireEvent.click(getByText("Prev"));
    expect(action).toHaveBeenCalledWith(2);
    expect(getByText("1")).toHaveClass("active");
  });

  it("clicking 'Next' button increments the page number", () => {
    const { getByText } = render(
      <Pagination page={page} pagesNumber={pagesNumber} />
    );
    fireEvent.click(getByText("Next"));
    expect(action).toHaveBeenCalledWith(1);
    expect(state).toBe(2);
  });

  it("clicking page number updates the page number", () => {
    const { getByText } = render(
      <Pagination page={page} pagesNumber={pagesNumber} />
    );
    fireEvent.click(getByText("3"));
    expect(action).toHaveBeenCalledWith(2);
    expect(state).toBe(3);
  });
});
