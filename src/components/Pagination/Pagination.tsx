import React from "react";
import { Stack } from "../../Enums/Stack";
interface IPages {
  state: number;
  action: React.Dispatch<React.SetStateAction<number>>;
}

interface PaginationProps {
  page: IPages;
  pagesNumber: Stack[][];
}

const Pagination: React.FC<PaginationProps> = ({ page, pagesNumber }) => {
  const { state, action } = page;
  const disablePrev = state === 0;
  const disableNext = state + 1 === pagesNumber.length;
  const handleNext = () => {
    if (disableNext) {
      return;
    } else {
      action(state + 1);
    }
  };
  const handlePrev = () => {
    if (disablePrev) {
      return;
    } else {
      action(state - 1);
    }
  };
  return (
    <div className="pagination">
      <p
        className={`prev ${disablePrev ? "disabled" : null}`}
        onClick={handlePrev}
      >
        Prev
      </p>
      <div className="numbers">
        {pagesNumber.map((pageNumber, index) => (
          <p
            key={pageNumber[0].id}
            onClick={() => action(index)}
            className={`number ${state === index ? "active" : ""}`}
          >
            {index + 1}
          </p>
        ))}
      </div>

      <p
        className={`next ${disableNext ? "disabled" : null}`}
        onClick={handleNext}
      >
        Next
      </p>
    </div>
  );
};

export default Pagination;
