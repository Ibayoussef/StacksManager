import React, { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  bold?: boolean;
  fontSize?: number;
  textOverflow?: boolean;
  card?: boolean;
}

/**
 * There is two variations of typography in the web app
 * bold and regular
 * @param {boolean} {bold} adds boldness to the typography
 * @param {number} {fontSize} specifies the font size
 * @param {ReactNode} {children} specifies the text that will be rendered
 * @return {JSX.Element} Typography
 */
const Typography: React.FC<TypographyProps> = ({
  children,
  bold,
  fontSize,
  textOverflow,
  card,
}) => {
  return (
    <div
      style={{
        fontWeight: bold ? 700 : 400,
        fontSize: `${fontSize}rem`,
        textOverflow: textOverflow ? "ellipsis" : "",
        overflow: textOverflow ? "hidden" : "",
        width: card ? "150px" : textOverflow ? "fit-content" : "",
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
