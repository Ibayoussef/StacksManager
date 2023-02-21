import React from "react";
import Typography from "../Typography/Typography";
import { Flex } from "../Flex/Flex";
import { ContentProps } from "../Dropdown/Content/Content";
import { sliceID } from "../../hooks/useSliceID";
import { useFormatDate } from "../../hooks/useFormatDate";
import { toast } from "react-toastify";
import Button from "../Button/Button";
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
        <Typography bold fontSize={16}>
          UUID
        </Typography>
        <Typography fontSize={16}>{id}</Typography>
      </Flex>
      <Flex
        direction="row"
        justify="space-between"
        className="rowtocolumn"
        align="center"
      >
        <Flex direction="column" gap={10}>
          <Typography bold fontSize={16}>
            Created at
          </Typography>
          <Typography fontSize={16}>{useFormatDate(created)}</Typography>
        </Flex>
        <Flex direction="column" gap={10}>
          <Typography bold fontSize={16}>
            Author
          </Typography>
          <Typography fontSize={16}>{sliceID(user)}</Typography>
        </Flex>
      </Flex>
      <Flex direction="column" gap={10}>
        <Typography bold fontSize={16}>
          Project
        </Typography>
        <Typography fontSize={16}>{sliceID(project)}</Typography>
      </Flex>
      <Flex justify="flex-end" className="button-container">
        <Button onClick={() => notify()} fontSize={1}>
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default StackInfo;
