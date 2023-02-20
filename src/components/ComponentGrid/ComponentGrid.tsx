import React from "react";
import { Flex } from "../Flex/Flex";
import ComponentCard from "./ComponentCard/ComponentCard";
import { useSelector } from "react-redux";
import { Component } from "../../Enums/Component";

const Grid: React.FC = () => {
  const { filteredComponents } = useSelector((state: any) => state.components);
  return (
    <div data-testid="component-grid">
      <Flex
        direction="row"
        gap={26}
        justify="center"
        className="grid"
        align="flex-start"
      >
        {filteredComponents.map((component: Component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </Flex>
    </div>
  );
};
export default Grid;
