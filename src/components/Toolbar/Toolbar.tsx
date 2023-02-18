import React, { useState } from "react";
import { Flex } from "../Flex/Flex";

import filter from "../../assets/filter.svg";
import add from "../../assets/add.svg";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { toast } from "react-toastify";
const Toolbar: React.FC = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const notify = () =>
    toast.error(
      "Sorry this feature is not yet available, we are working on it"
    );
  return (
    <Flex
      className="toolbar"
      direction="row"
      align="center"
      justify="flex-end"
      gap={27}
    >
      <FilterSidebar
        sidebarActive={{ state: sidebarActive, action: setSidebarActive }}
      />
      <img src={filter} onClick={() => setSidebarActive(true)} alt="filter" />
      <img src={add} onClick={() => notify()} alt="add" />
    </Flex>
  );
};

export default Toolbar;
