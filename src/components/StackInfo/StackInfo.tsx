import React from "react";
import Typography from "../Typography/Typography";
import { Flex } from "../Flex/Flex";
import StatusPill from "../StatusPill/StatusPill";
import { ContentProps } from "../Dropdown/Content/Content";
import { sliceID } from "../../hooks/useSliceID";
import { useFormatDate } from "../../hooks/useFormatDate";
import { toast } from "react-toastify";
interface StackInfoProps extends ContentProps {}

const StackInfo: React.FC<StackInfoProps> = ({
  id,
  user,
  created,
  project,
}) => {
  const notify = () =>
    toast.error(
      "Sorry this feature is not yet available, we are working on it"
    );
  return (
    <Flex direction="column" className="stackinfo" gap={24}>
      <Flex direction="column" gap={10}>
        <Typography fontSize={32}>UUID</Typography>
        <Typography fontSize={20}>{id}</Typography>
      </Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column" gap={10}>
          <Typography fontSize={32}>Created at</Typography>
          <Typography fontSize={20}>{useFormatDate(created)}</Typography>
        </Flex>
        <Flex direction="column" gap={10}>
          <Typography fontSize={32}>Author</Typography>
          <Typography fontSize={20}>{sliceID(user)}</Typography>
        </Flex>
      </Flex>
      <Flex direction="column" gap={10}>
        <Typography fontSize={32}>Project</Typography>
        <Typography fontSize={20}>{sliceID(project)}</Typography>
      </Flex>
      <Flex justify="flex-end" className="button-container">
        <StatusPill onClick={() => notify()} button fontSize={20}>
          Delete
        </StatusPill>
      </Flex>
    </Flex>
  );
};

export default StackInfo;
