/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "./Checkbox";
import { storeFilters } from "../../../slices/stacksSlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../../slices/stacksSlice", () => ({
  storeFilters: jest.fn(),
}));

describe("Checkbox", () => {
  const dispatch = jest.fn();
  const filters = {
    shared: false,
    inactive: false,
  };
  const defaultProps = {
    isShared: true,
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation((selector) =>
      selector({ stacks: { filters } })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render unchecked checkbox by default", () => {
    const { getByRole } = render(<Checkbox {...defaultProps} />);
    const checkbox = getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  it("should call storeFilters with shared filter enabled when checkbox is checked", () => {
    const { getByRole } = render(<Checkbox {...defaultProps} />);
    const checkbox = getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(storeFilters).toHaveBeenCalledWith({ ...filters, shared: true });
    expect(dispatch).toHaveBeenCalledWith(
      storeFilters({ ...filters, shared: true })
    );
  });

  it("should call storeFilters with inactive filter disabled when isShared is false and checkbox is unchecked", () => {
    filters.inactive = true;

    const { getByRole } = render(<Checkbox isShared={false} />);
    const checkbox = getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(storeFilters).toHaveBeenCalledWith({ ...filters, inactive: true });
    expect(dispatch).toHaveBeenCalledWith(
      storeFilters({ ...filters, inactive: true })
    );
  });
});
