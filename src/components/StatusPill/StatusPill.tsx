import React, { useMemo, ReactNode } from "react";

interface StatusPillProps {
  isShared?: boolean;
  button?: boolean;
  fontSize?: number;
  children?: ReactNode;
  onClick?: () => void;
}

/**
 * There is two variations of the status pill one when the stack is
 * shared and the other when it isn't
 * @param {boolean} {isShared} specifies whether the stack is shared or not
 * @param {number} {fontSize} specifies the font size for the text inside the pill
 * @return {JSX.Element} StatusPill
 */
const StatusPill: React.FC<StatusPillProps> = ({
  isShared,
  fontSize,
  onClick,
  button,
  children,
}) => {
  const status = useMemo(() => (isShared ? "Shared" : "Inactive"), [isShared]);
  return (
    <div
      style={{
        fontSize: fontSize,
        background: button ? "#B52C2C" : "",
        cursor: button ? "pointer" : "",
        color: button ? "#fff" : "",
      }}
      onClick={() => (button && onClick ? onClick() : null)}
      className={`pill ${status.toLowerCase()}`}
    >
      {!children && status}
      {children && children}
    </div>
  );
};

export default StatusPill;
