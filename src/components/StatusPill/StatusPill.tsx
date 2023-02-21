import React, { useMemo } from "react";
import { Flex } from "../Flex/Flex";

interface StatusPillProps {
  isShared?: boolean;
}

const StatusPill: React.FC<StatusPillProps> = ({ isShared }) => {
  const status = useMemo(() => (isShared ? "Shared" : "Inactive"), [isShared]);
  return (
    <Flex
      direction="row"
      align="center"
      className={`pill ${status.toLowerCase()}`}
    >
      <div className="circle"></div>
      <div className="status">{status}</div>
    </Flex>
  );
};

export default StatusPill;
