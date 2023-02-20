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
    <Flex direction="column" testid="stack-info" className="stackinfo" gap={24}>
      <Flex direction="column" gap={10}>
        <Typography fontSize={2}>UUID</Typography>
        <Typography fontSize={1}>{id}</Typography>
      </Flex>
      <Flex
        direction="row"
        justify="space-between"
        className="rowtocolumn"
        align="center"
      >
        <Flex direction="column" gap={10}>
          <Typography fontSize={2}>Created at</Typography>
          <Typography fontSize={1}>{useFormatDate(created)}</Typography>
        </Flex>
        <Flex direction="column" gap={10}>
          <Typography fontSize={2}>Author</Typography>
          <Typography fontSize={1}>{sliceID(user)}</Typography>
        </Flex>
      </Flex>
      <Flex direction="column" gap={10}>
        <Typography fontSize={2}>Project</Typography>
        <Typography fontSize={1}>{sliceID(project)}</Typography>
      </Flex>
      <Flex justify="flex-end" className="button-container">
        <StatusPill onClick={() => notify()} button fontSize={1}>
          Delete
        </StatusPill>
      </Flex>
    </Flex>
  );
};

export default StackInfo;
