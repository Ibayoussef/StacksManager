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
  const handleNext = () => {
    if (state + 1 === pagesNumber.length) {
      action(0);
    } else {
      action(state + 1);
    }
  };
  const handlePrev = () => {
    if (state === 0) {
      action(pagesNumber.length - 1);
    } else {
      action(state - 1);
    }
  };
  return (
    <div className="pagination">
      <p className="prev" onClick={handlePrev}>
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

      <p className="next" onClick={handleNext}>
        Next
      </p>
    </div>
  );
};

export default Pagination;
