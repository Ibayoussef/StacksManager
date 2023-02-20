/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { searchStack } from "../../slices/stacksSlice";
import Searchbar from "./Searchbar";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Searchbar", () => {
  test("calls searchStack action on input change", () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByPlaceholderText } = render(<Searchbar />);
    const input = getByPlaceholderText("Search by Name or ID...");

    fireEvent.change(input, { target: { value: "test" } });

    expect(dispatchMock).toHaveBeenCalledWith(searchStack("test"));
  });
});
