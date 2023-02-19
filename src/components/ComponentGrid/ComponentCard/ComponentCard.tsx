import React from "react";
import { Flex } from "../../Flex/Flex";
import Typography from "../../Typography/Typography";
import StatusPill from "../../StatusPill/StatusPill";
import copy from "../../../assets/copy.svg";
import { Component } from "../../../Enums/Component";
import { sliceID } from "../../../hooks/useSliceID";
import { useFormatDate } from "../../../hooks/useFormatDate";
interface ComponentCardProps {
  component: Component;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  const { type, name, flavor, created, user, configuration, is_shared } =
    component;

  return (
    <Flex direction="column" className="card" gap={10}>
      <Flex direction="row" justify="space-between" align="center">
        <Typography textOverflow fontSize={1.4}>
          {name}
        </Typography>
        <StatusPill isShared={is_shared} fontSize={1} />
      </Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column" gap={0}>
          <Typography fontSize={1}>type</Typography>
          <Typography textOverflow fontSize={0.8}>
            {type}
          </Typography>
        </Flex>
        <Flex direction="column" gap={0} textAlign="right">
          <Typography fontSize={1}>Created at</Typography>
          <Typography fontSize={0.9}>{useFormatDate(created)}</Typography>
        </Flex>
      </Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column" gap={0}>
          <Typography fontSize={1}>flavor</Typography>
          <Typography fontSize={0.8}>{flavor}</Typography>
        </Flex>
        <Flex direction="column" gap={0} textAlign="right">
          <Typography fontSize={1}>author</Typography>
          <Typography fontSize={0.8}>{sliceID(user)}</Typography>
        </Flex>
      </Flex>
      <Flex direction="row" justify="flex-start" gap={11} align="center">
        <Typography fontSize={1}>Copy Configuration</Typography>
        <img src={copy} alt="copy" />
      </Flex>
    </Flex>
  );
};

export default ComponentCard;
