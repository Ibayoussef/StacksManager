import React from "react";
import Typography from "../Typography/Typography";
import { Flex } from "../Flex/Flex";
const StackInfo: React.FC = () => {
  return (
    <Flex direction="column" className="stackinfo" gap={24}>
      <Flex direction="column" gap={10}>
        <Typography fontSize={32}>UUID</Typography>
        <Typography fontSize={20}>
          4906f671-e531-49d2-ba95-67af668137ac
        </Typography>
      </Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column" gap={10}>
          <Typography fontSize={32}>Created at</Typography>
          <Typography fontSize={20}>10.02.2023 15:09:05</Typography>
        </Flex>
        <Flex direction="column" gap={10}>
          <Typography fontSize={32}>Author</Typography>
          <Typography fontSize={20}>default</Typography>
        </Flex>
      </Flex>
      <Flex direction="column" gap={10}>
        <Typography fontSize={32}>Project</Typography>
        <Typography fontSize={20}>8f55ff0d</Typography>
      </Flex>
    </Flex>
  );
};

export default StackInfo;
