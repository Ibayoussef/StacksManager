import React, { useMemo } from "react";

interface StatusPillProps {
  isShared: boolean;
  fontSize?: number;
}

/**
 * There is two variations of the status pill one when the stack is
 * shared and the other when it isn't
 * @param {boolean} {isShared} specifies whether the stack is shared or not
 * @param {number} {fontSize} specifies the font size for the text inside the pill
 * @return {JSX.Element} StatusPill
 */
const StatusPill: React.FC<StatusPillProps> = ({ isShared, fontSize }) => {
  const status = useMemo(() => (isShared ? "Shared" : "Inactive"), [isShared]);
  return (
    <div
      style={{ fontSize: fontSize }}
      className={`pill ${status.toLowerCase()}`}
    >
      {status}
    </div>
  );
};

export default StatusPill;
