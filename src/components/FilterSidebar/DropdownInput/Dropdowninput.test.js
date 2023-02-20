/**
 * @jest-environment jsdom
 */
import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import DropdownInput from "./DropdownInput";
import { getUsers, storeFilters } from "../../../slices/stacksSlice";

// Create a mock store with Redux middleware
const mockStore = configureMockStore([thunk]);

describe("DropdownInput component", () => {
  let store;

  beforeEach(() => {
    const initialState = {
      stacks: {
        users: ["User1", "User 2", "User 3"],
        filters: {
          author: "User 1",
        },
      },
    };

    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <DropdownInput />
      </Provider>
    );
  });

  it("should display the current author", () => {
    const dropdownFace = screen.getByTestId("dropdown");
    expect(dropdownFace).toHaveTextContent("User1".slice(0, 6));
  });

  it("should display the dropdown items when the dropdown face is clicked", () => {
    const dropdownFace = screen.getByTestId("dropdown");
    fireEvent.click(dropdownFace);

    const dropdownItems = screen.getByTestId("listbox");
    expect(dropdownItems).toBeVisible();
  });

  it("should select a new author when a dropdown item is clicked", () => {
    const dropdownFace = screen.getByTestId("dropdown");
    fireEvent.click(dropdownFace);

    const dropdownItem = screen.getByText("User1");
    fireEvent.click(dropdownItem);

    const expectedAction = storeFilters("User1");
    expect(expectedAction.type).toEqual(storeFilters.type);
    expect(expectedAction.payload).toEqual("User1");
  });

  it("should close the dropdown when a dropdown item is clicked", () => {
    const dropdownFace = screen.getByTestId("dropdown");
    fireEvent.click(dropdownFace);

    const dropdownItem = screen.getByText("User1");
    fireEvent.click(dropdownItem);

    expect(dropdownFace).not.toBeChecked();
  });
});
