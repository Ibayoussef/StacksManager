/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import Grid from "./ComponentGrid";
import { Provider } from "react-redux";
import store from "../../store/index";

describe("Grid component", () => {
  it("renders component cards", () => {
    render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );

    expect(screen.getByTestId("component-grid")).toBeInTheDocument();
  });
});
