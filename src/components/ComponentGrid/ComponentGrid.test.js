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
        <Grid id={"125f317c-1bcf-4497-905d-857b72108af5"} />
      </Provider>
    );

    expect(screen.getByTestId("component-grid")).toBeInTheDocument();
  });
});
