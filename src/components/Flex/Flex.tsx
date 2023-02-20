import React, { ReactNode } from "react";

interface FlexProps {
  direction?: "row" | "column";
  testid?: string;
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  gap?: number;
  className?: string;
  textAlign?: "left" | "right" | "center";
  children: ReactNode;
}
export const Flex: React.FC<FlexProps> = ({
  direction,
  justify,
  gap,
  className,
  testid,
  textAlign,
  align,
  children,
}) => {
  return (
    <div
      className={className}
      data-testid={testid}
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        textAlign: textAlign,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};
