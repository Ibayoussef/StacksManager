import React from "react";
import { Flex } from "../../Flex/Flex";
import Typography from "../../Typography/Typography";
import StatusPill from "../../StatusPill/StatusPill";
import copy from "../../../assets/copy.svg";
export const ComponentCard = () => {
  return (
    <Flex direction="column" className="card" gap={10}>
      <Flex direction="row" justify="space-between" align="center">
        <Typography fontSize={24}>default</Typography>
        <StatusPill isShared fontSize={20} />
      </Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column" gap={0}>
          <Typography fontSize={20}>type</Typography>
          <Typography fontSize={16}>artifact_store</Typography>
        </Flex>
        <Flex direction="column" gap={0} textAlign="right">
          <Typography fontSize={20}>Created at</Typography>
          <Typography fontSize={16}>10.02.2023 15:09:05</Typography>
        </Flex>
      </Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column" gap={0}>
          <Typography fontSize={20}>flavor</Typography>
          <Typography fontSize={16}>local</Typography>
        </Flex>
        <Flex direction="column" gap={0} textAlign="right">
          <Typography fontSize={20}>author</Typography>
          <Typography fontSize={16}>default</Typography>
        </Flex>
      </Flex>
      <Flex direction="row" justify="flex-start" gap={11} align="center">
        <Typography fontSize={20}>Copy Configuration</Typography>
        <img src={copy} alt="copy" />
      </Flex>
    </Flex>
  );
};
