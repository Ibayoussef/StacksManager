/**
 * @jest-environment jsdom
 */
import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import FilterSidebar from "./FilterSidebar";

const mockStore = configureStore([]);

describe("FilterSidebar", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      stacks: {
        users: ["zeaz", "erokaro"],
        filters: {
          author: "",
          shared: false,
          inactive: false,
          created: { startDate: "", endDate: "" },
        },
      },
    });
  });

  test("should show sidebar depending on state true", () => {
    render(
      <Provider store={store}>
        <FilterSidebar sidebarActive={{ state: true, action: jest.fn() }} />
      </Provider>
    );

    expect(screen.getByTestId("filter-sidebar")).toHaveClass("active");
  });
  test("should hide sidebar depending on state false", () => {
    render(
      <Provider store={store}>
        <FilterSidebar sidebarActive={{ state: false, action: jest.fn() }} />
      </Provider>
    );

    expect(screen.getByTestId("filter-sidebar")).not.toHaveClass("active");
  });
});
