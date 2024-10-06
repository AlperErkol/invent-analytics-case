import React from "react";
import Button from "./button";
import { usePage } from "../../hooks/use-page";

interface IProps {
  rowCount: number | undefined;
}

const PAGE_ROW_LIMIT = 10;

const Pagination: React.FC<IProps> = ({ rowCount }) => {
  const [currentPage, setSearchParams] = usePage();

  const calculateNextPage = (isPrev: boolean) => {
    const nextPage = isPrev ? currentPage - 1 : currentPage + 1;
    setSearchParams({ page: nextPage.toString() });
  };

  const hasNextPage = () => {
    const totalShownCount = PAGE_ROW_LIMIT * currentPage;
    return !(rowCount && totalShownCount > rowCount);
  };

  return (
    <div className="content-page-body-pagination flex items-center justify-between mt-2">
      {rowCount && <small>{rowCount} contents are retrieved.</small>}
      <div className="flex gap-4">
        <Button
          label="Previous"
          disabled={currentPage === 1}
          onClick={() => calculateNextPage(true)}
        />
        <Button
          label="Next"
          onClick={() => calculateNextPage(false)}
          disabled={!hasNextPage()}
        />
      </div>
    </div>
  );
};

export default Pagination;
