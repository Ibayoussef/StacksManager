import React from "react";
import { Flex } from "../Flex/Flex";
import filter from "../../assets/filter.svg";
import add from "././assets/add.svg";
const Toolbar = () => {
  return (
    <Flex direction="row" align="center" justify="flex-end" gap={27}>
      <img src={filter} alt="filter" />
      <img src={add} alt="add" />
    </Flex>
  );
};

export default Toolbar;
