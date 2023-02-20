import React, { useState } from "react";
import { Flex } from "../Flex/Flex";
import Typography from "../Typography/Typography";
import close from "../../assets/close.svg";
import DropdownInput from "./DropdownInput/DropdownInput";
import Checkbox from "./Checkbox/Checkbox";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { storeFilters } from "../../slices/stacksSlice";
import StatusPill from "../StatusPill/StatusPill";
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
  const range = filters.created.endDate
    ? [
        {
          startDate: new Date(filters.created.startDate),
          endDate: new Date(filters.created.endDate),
          key: "selection",
        },
      ]
    : [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ];
  return (
    <div
      data-testid="filter-sidebar"
      className={`filtersidebar ${state ? " active" : ""}`}
    >
      <Flex
        direction="row"
        justify="space-between"
        className="filtersidebar__header"
        align="center"
      >
        <Typography bold fontSize={2}>
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
        <Typography fontSize={1.5}>Author</Typography>
        <DropdownInput />
        <Flex direction="row" align="center" gap={19}>
          <Typography fontSize={1.5}>Shared</Typography>
          <Checkbox isShared />
        </Flex>
        <Flex direction="row" align="center" gap={19}>
          <Typography fontSize={1.5}>Inactive</Typography>
          <Checkbox />
        </Flex>
        <Typography fontSize={1.5}>Created at</Typography>
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => {
            dispatch(
              storeFilters({
                ...filters,
                created: {
                  startDate: new Date(item.selection.startDate).getTime(),
                  endDate: new Date(item.selection.endDate).getTime(),
                },
              })
            );
          }}
          moveRangeOnFirstSelection={false}
          ranges={range}
        />
        <StatusPill
          onClick={() =>
            dispatch(
              storeFilters({
                author: "",
                shared: false,
                inactive: false,
                created: { startDate: "", endDate: "" },
              })
            )
          }
          button
          fontSize={1}
        >
          Clear Filters
        </StatusPill>
      </Flex>
    </div>
  );
};

export default FilterSidebar;
