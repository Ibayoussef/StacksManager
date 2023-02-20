/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import StackInfo from "./StackInfo";

describe("StackInfo", () => {
  const mockContentProps = {
    id: "123",
    user: "John",
    created: new Date("2022-02-20T12:34:56.789Z"),
    project: "Project X",
  };

  it("renders the UUID", () => {
    render(<StackInfo {...mockContentProps} />);
    expect(screen.getByText("UUID")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });

  it("renders the creation date and user", () => {
    render(<StackInfo {...mockContentProps} />);
    expect(screen.getByText("Created at")).toBeInTheDocument();
    expect(screen.getByText("20.02.2022 13:34:56")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("renders the project name", () => {
    render(<StackInfo {...mockContentProps} />);
    expect(screen.getByText("Project")).toBeInTheDocument();
  });
});
