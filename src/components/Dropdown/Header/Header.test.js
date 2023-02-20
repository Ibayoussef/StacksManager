/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import Header from "./Header";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Header", () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  const props = {
    collapse: {
      state: false,
      action: jest.fn(),
    },
    name: "Test Dropdown",
    isShared: true,
    componentsNumber: 3,
    components: [1, 2, 3],
    id: "1",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with the correct props", () => {
    render(<Header {...props} />);
    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(
      screen.getByText(`${props.componentsNumber} Components`)
    ).toBeInTheDocument();
    expect(screen.getByAltText("arrow")).toBeInTheDocument();
    expect(screen.getByAltText("arrow")).toHaveClass(
      "header__button--collapse"
    );
  });

  it("dispatches filterComponents action and toggles the state when the arrow is clicked", () => {
    render(<Header {...props} />);
    const arrowButton = screen.getByAltText("arrow");
    fireEvent.click(arrowButton);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "components/filterComponents",
      payload: { components: props.components, id: props.id },
    });
    expect(props.collapse.action).toHaveBeenCalledWith(true);
  });
});
