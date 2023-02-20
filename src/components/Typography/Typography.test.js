/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography component", () => {
  it("renders children", () => {
    const { getByText } = render(<Typography>hello world</Typography>);
    expect(getByText("hello world")).toBeInTheDocument();
  });

  it('renders bold text when "bold" prop is true', () => {
    const { getByText } = render(<Typography bold>bold text</Typography>);
    const element = getByText("bold text");
    expect(element).toHaveStyle("font-weight: 700");
  });

  it('renders regular text when "bold" prop is false', () => {
    const { getByText } = render(
      <Typography bold={false}>regular text</Typography>
    );
    const element = getByText("regular text");
    expect(element).toHaveStyle("font-weight: 400");
  });

  it("renders text with specified font size", () => {
    const { getByText } = render(
      <Typography fontSize={1.5}>large text</Typography>
    );
    const element = getByText("large text");
    expect(element).toHaveStyle("font-size: 1.5rem");
  });

  it('renders text with ellipsis when "textOverflow" prop is true', () => {
    const { getByText } = render(
      <Typography textOverflow>long long text</Typography>
    );
    const element = getByText("long long text");
    expect(element).toHaveStyle("text-overflow: ellipsis");
    expect(element).toHaveStyle("overflow: hidden");
    expect(element).toHaveStyle("width: 150px");
  });
});
