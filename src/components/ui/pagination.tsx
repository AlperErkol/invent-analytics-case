import React from "react";
import Button from "./button";

interface IProps {
  currentPage: number;
  rowCount: number | undefined;
  onClick: any;
}

const Pagination: React.FC<IProps> = ({ currentPage, rowCount, onClick }) => {
  return (
    <div className="content-page-body-pagination flex items-center justify-between mt-2">
      {rowCount && <small>{rowCount} contents are retrieved.</small>}
      <div className="flex gap-4">
        <Button
          label="Previous"
          disabled={currentPage === 1}
          onClick={() => onClick(true)}
        />
        <Button label="Next" onClick={() => onClick(false)} />
      </div>
    </div>
  );
};

export default Pagination;
