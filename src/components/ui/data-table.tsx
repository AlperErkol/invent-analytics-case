import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";

interface IProps {
  columns: string[];
  data: any;
}

const DataTable: React.FC<IProps> = ({ columns, data }) => {
  const navigate = useNavigate();
  const contents = data?.Search;

  const onRowClick = (id: string) => {
    navigate(`/content/${id}`);
  };

  return (
    <div className="content-page-body-wrapper">
      <table className="content-page-body-wrapper-table">
        <tr>
          {columns.map((columnName: string, index: number) => (
            <th key={index}>{columnName}</th>
          ))}
        </tr>
        {contents &&
          contents.map((content: any, index: number) => (
            <tr onClick={() => onRowClick(content.imdbID)} key={index}>
              <td>{content.Title}</td>
              <td>{content.Year}</td>
              <td>{content.Type}</td>
              <td>{content.imdbID}</td>
            </tr>
          ))}
      </table>
      {contents && <Pagination rowCount={data?.totalResults} />}
    </div>
  );
};

export default DataTable;
