/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import StatusPill from "./StatusPill";

describe("StatusPill", () => {
  it("renders correctly when not shared", () => {
    const { getByText } = render(<StatusPill isShared={false} />);
    expect(getByText("Inactive")).toBeInTheDocument();
  });

  it("renders correctly when shared", () => {
    const { getByText } = render(<StatusPill isShared={true} />);
    expect(getByText("Shared")).toBeInTheDocument();
  });
});
