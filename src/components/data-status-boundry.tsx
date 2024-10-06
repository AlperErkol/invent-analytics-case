import React from "react";
import Loading from "./loading";
import DataError from "./data-error";
import NoData from "./no-data";

interface IProps {
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: any;
}

const DataStatusBoundry: React.FC<IProps> = ({
  isPending,
  isError,
  isSuccess,
  data,
}) => {
  const errorMessage = data?.Error;
  return (
    <div className="flex items-center justify-center py-8">
      {isPending && <Loading />}
      {isError && <DataError />}
      {isSuccess && !data.Result && <NoData message={errorMessage} />}
    </div>
  );
};

export default DataStatusBoundry;
