import React from "react";
import { Flex } from "../Flex/Flex";
import { ComponentCard } from "./ComponentCard/ComponentCard";

const Grid: React.FC = () => {
  return (
    <Flex
      direction="row"
      gap={26}
      justify="center"
      className="grid"
      align="flex-start"
    >
      <ComponentCard />
      <ComponentCard />
      <ComponentCard />
      <ComponentCard />
      <ComponentCard />
    </Flex>
  );
};
export default Grid;
