import React, { useState } from "react";
import { Flex } from "../Flex/Flex";
import Typography from "../Typography/Typography";
import close from "../../assets/close.svg";
import DropdownInput from "./DropdownInput/DropdownInput";
import Checkbox from "./Checkbox/Checkbox";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { storeFilters } from "../../slices/stacksSlice";
import { useFormatDate } from "../../hooks/useFormatDate";
interface ISidebarActive {
  state: boolean;
  action: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterSidebarProps {
  sidebarActive: ISidebarActive;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ sidebarActive }) => {
  const { state, action } = sidebarActive;
  const { filters } = useSelector((state: any) => state.stacks);
  const dispatch = useDispatch();
  const [stateDate, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
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
          <Checkbox isShared />
        </Flex>
        <Flex direction="row" gap={19}>
          <Typography fontSize={32}>Inactive</Typography>
          <Checkbox />
        </Flex>
        <Typography fontSize={32}>Created at</Typography>
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => {
            setState([item.selection]);
            dispatch(
              storeFilters({
                ...filters,
                created: {
                  startDate: useFormatDate(item.selection.startDate),
                  endDate: useFormatDate(item.selection.endDate),
                },
              })
            );
          }}
          moveRangeOnFirstSelection={false}
          ranges={stateDate}
        />
      </Flex>
    </div>
  );
};

export default FilterSidebar;
