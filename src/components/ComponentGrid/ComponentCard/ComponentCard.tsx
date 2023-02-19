import React, { useState, useEffect } from "react";
import { Flex } from "../../Flex/Flex";
import Typography from "../../Typography/Typography";
import StatusPill from "../../StatusPill/StatusPill";
import copy from "../../../assets/copy.svg";
import { Component } from "../../../Enums/Component";
import { sliceID } from "../../../hooks/useSliceID";
import { useFormatDate } from "../../../hooks/useFormatDate";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
interface ComponentCardProps {
  component: Component;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const { type, name, flavor, created, user, configuration, is_shared } =
    component;
  useEffect(() => {
    if (copied) {
      toast.success(() => "Configuration Copied");
      setCopied(false);
    }
  }, [copied]);
  return (
    <Flex direction="column" className="card" gap={10}>
      <Flex direction="row" justify="space-between" align="center">
        <Typography textOverflow fontSize={2}>
          {name}
        </Typography>
        <StatusPill isShared={is_shared} fontSize={1.5} />
      </Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column" gap={0}>
          <Typography fontSize={1.5}>type</Typography>
          <Typography textOverflow fontSize={1}>
            {type}
          </Typography>
        </Flex>
        <Flex direction="column" gap={0} textAlign="right">
          <Typography fontSize={1.2}>Created at</Typography>
          <Typography fontSize={1}>{useFormatDate(created)}</Typography>
        </Flex>
      </Flex>
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column" gap={0}>
          <Typography fontSize={1.2}>flavor</Typography>
          <Typography fontSize={1}>{flavor}</Typography>
        </Flex>
        <Flex direction="column" gap={0} textAlign="right">
          <Typography fontSize={1.2}>author</Typography>
          <Typography fontSize={1}>{sliceID(user)}</Typography>
        </Flex>
      </Flex>
      <Flex direction="row" justify="flex-start" gap={11} align="center">
        <Typography fontSize={1.2}>
          {JSON.stringify(configuration) !== "{}"
            ? "Copy Configuration"
            : "Configuration not available"}
        </Typography>
        {JSON.stringify(configuration) !== "{}" && (
          <CopyToClipboard
            text={JSON.stringify(configuration)}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <img src={copy} alt="copy" />
          </CopyToClipboard>
        )}
      </Flex>
    </Flex>
  );
};

export default ComponentCard;
