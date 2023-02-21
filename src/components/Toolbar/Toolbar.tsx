import React, { useState } from "react";
import { Flex } from "../Flex/Flex";
import add from "../../assets/add.svg";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { toast } from "react-toastify";
import { FilterIcon, AddIcon } from "./Icons";
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

      <FilterIcon setSidebarActive={setSidebarActive} />
      <AddIcon handleClick={() => notify()} />
    </Flex>
  );
};

export default Toolbar;
