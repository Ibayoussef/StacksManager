/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Toolbar from "./Toolbar";
const mockStore = configureStore([]);
describe("Toolbar component", () => {
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
        stacks: [],
      },
    });
  });
  it("displays the filter sidebar when filter icon is clicked", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Toolbar />
      </Provider>
    );
    const filterIcon = getByTestId("filter");
    fireEvent.click(filterIcon);
    const filterSidebar = getByTestId("filter-sidebar");
    expect(filterSidebar).toBeInTheDocument();
  });

  it("displays an error toast when add icon is clicked", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Toolbar />
      </Provider>
    );
    const addIcon = getByTestId("add");
    fireEvent.click(addIcon);
  });
});
