import React from "react";
import { Flex } from "../Flex/Flex";
import ComponentCard from "./ComponentCard/ComponentCard";
import { useSelector } from "react-redux";
import { Component } from "../../Enums/Component";

interface GridProps {
  id: string;
}

const Grid: React.FC<GridProps> = ({ id }) => {
  const { filteredComponents } = useSelector((state: any) => state.components);
  return (
    <Flex
      direction="row"
      gap={26}
      testid="component-grid"
      justify="center"
      className="grid"
      align="flex-start"
    >
      {filteredComponents[id] &&
        filteredComponents[id].map((component: Component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
    </Flex>
  );
};
export default Grid;
