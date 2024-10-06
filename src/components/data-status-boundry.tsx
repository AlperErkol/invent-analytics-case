import React from "react";
import Loading from "./loading";
import DataError from "./data-error";
import NoData from "./no-data";

interface IProps {
  isPending: boolean;
  isError: boolean;
  data: any;
}

const DataStatusBoundry: React.FC<IProps> = ({ isPending, isError, data }) => {
  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <DataError />;
  }

  if (data?.Response === "False") {
    const errorMessage = data?.Error;
    return <NoData message={errorMessage} />;
  }

  return null;
};

export default DataStatusBoundry;
