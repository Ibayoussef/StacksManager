/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Content from "./Content";
import { Provider } from "react-redux";
import store from "../../../store/index";

describe("Content", () => {
  it("renders component without crashing", () => {
    render(
      <Provider store={store}>
        <Content
          id="stack-id"
          user="user"
          project="project"
          created="2022-02-20"
        />
      </Provider>
    );
  });

  it("renders the StackInfo component with correct props when collapse is false", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Content
          collapse={false}
          id="stack-id"
          user="user"
          project="project"
          created="2022-02-20"
        />
      </Provider>
    );
    const stackInfo = getByTestId("stack-info");
    expect(stackInfo).toBeInTheDocument();
  });

  it("does not render the StackInfo component when collapse is true", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Content
          collapse={true}
          id="stack-id"
          user="user"
          project="project"
          created="2022-02-20"
        />
      </Provider>
    );
    const stackInfo = queryByTestId("stack-info");
    expect(stackInfo).not.toBeInTheDocument();
  });

  it("renders the Grid component with correct props when collapse is false", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Content
          collapse={false}
          id="stack-id"
          user="user"
          project="project"
          created="2022-02-20"
        />
      </Provider>
    );
    const grid = getByTestId("component-grid");
    expect(grid).toBeInTheDocument();
  });

  it("does not render the Grid component when collapse is true", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Content
          collapse={true}
          id="stack-id"
          user="user"
          project="project"
          created="2022-02-20"
        />
      </Provider>
    );
    const grid = queryByTestId("component-grid");
    expect(grid).not.toBeInTheDocument();
  });
});
