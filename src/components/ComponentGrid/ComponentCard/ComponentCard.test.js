/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ComponentCard from "./ComponentCard";

const mockComponent = {
  id: "1",
  type: "foo",
  name: "test",
  flavor: "bar",
  created: "2022-02-20T10:20:30Z",
  user: "test1",
  configuration: {
    something: "doing",
  },
  is_shared: false,
};

describe("ComponentCard", () => {
  it("renders the component card with correct content", () => {
    render(<ComponentCard component={mockComponent} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("foo")).toBeInTheDocument();
    expect(screen.getByText("bar")).toBeInTheDocument();
    expect(screen.getByText("Created at")).toBeInTheDocument();
    expect(screen.getByText("20.02.2022 11:20:30")).toBeInTheDocument();
    expect(screen.getByText("author")).toBeInTheDocument();
    expect(screen.getByText("test1")).toBeInTheDocument();
  });

  it("renders the copy configuration button when configuration is available", () => {
    render(<ComponentCard component={mockComponent} />);
    expect(screen.getByText("Copy Configuration")).toBeInTheDocument();
  });

  it("does not render the copy configuration button when configuration is not available", () => {
    const mockComponentWithoutConfig = {
      ...mockComponent,
      configuration: {},
    };
    render(<ComponentCard component={mockComponentWithoutConfig} />);
    expect(
      screen.queryByText("Configuration not available")
    ).toBeInTheDocument();
  });
});
