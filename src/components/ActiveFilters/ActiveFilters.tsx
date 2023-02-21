import React from "react";
import { Flex } from "../Flex/Flex";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../Enums/AppState";
import Typography from "../Typography/Typography";
import close from "../../assets/close.svg";
import { format } from "date-fns";
import { storeFilters } from "../../slices/stacksSlice";
const ActiveFilters: React.FC = () => {
  const { filters } = useSelector((state: AppState) => state.stacks);
  const dispatch = useDispatch();
  const handleReset = (
    key: string,
    value: string | boolean | { startDate: string; endDate: string }
  ) => {
    dispatch(storeFilters({ ...filters, [key]: value }));
  };
  return (
    <Flex direction="row" gap={10} align="center">
      {filters.author && (
        <div className="activefilter">
          <Typography fontSize={16}>{filters.author.slice(0, 6)}</Typography>
          <img
            src={close}
            onClick={() => handleReset("author", "")}
            alt="close"
          />
        </div>
      )}
      {filters.shared && (
        <div className="activefilter">
          <Typography fontSize={16}>shared</Typography>
          <img
            src={close}
            onClick={() => handleReset("shared", false)}
            alt="close"
          />
        </div>
      )}
      {filters.inactive && (
        <div className="activefilter">
          <Typography fontSize={16}>inactive</Typography>
          <img
            src={close}
            alt="close"
            onClick={() => handleReset("inactive", false)}
          />
        </div>
      )}

      {filters.created.startDate !== "" && filters.created.endDate !== "" && (
        <div className="activefilter">
          <Typography fontSize={16}>
            {format(new Date(filters.created.startDate), "dd.MM.yyyy") +
              " - " +
              format(new Date(filters.created.endDate), "dd.MM.yyyy")}
          </Typography>
          <img
            src={close}
            alt="close"
            onClick={() => {
              handleReset("created", { startDate: "", endDate: "" });
            }}
          />
        </div>
      )}
    </Flex>
  );
};

export default ActiveFilters;
