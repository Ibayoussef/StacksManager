import React from "react";
import { Flex } from "../Flex/Flex";
import Typography from "../Typography/Typography";
import close from "../../assets/close.svg";
import DropdownInput from "./DropdownInput/DropdownInput";
import Checkbox from "./Checkbox/Checkbox";

interface ISidebarActive {
  state: boolean;
  action: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterSidebarProps {
  sidebarActive: ISidebarActive;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ sidebarActive }) => {
  const { state, action } = sidebarActive;
  return (
    <div className={`filtersidebar ${state ? " active" : ""}`}>
      <Flex
        direction="row"
        justify="space-between"
        className="filtersidebar__header"
        align="center"
      >
        <Typography bold fontSize={32}>
          Filters
        </Typography>
        <img src={close} alt="close" onClick={() => action(false)} />
      </Flex>
      <Flex
        direction="column"
        align="flex-start"
        justify="center"
        gap={18}
        className="filtersidebar__filter-list"
      >
        <Typography fontSize={32}>Author</Typography>
        <DropdownInput />
        <Flex direction="row" gap={19}>
          <Typography fontSize={32}>Shared</Typography>
          <Checkbox />
        </Flex>
        <Flex direction="row" gap={19}>
          <Typography fontSize={32}>Inactive</Typography>
          <Checkbox />
        </Flex>
        <Typography fontSize={32}>Created at</Typography>
      </Flex>
    </div>
  );
};

export default FilterSidebar;
