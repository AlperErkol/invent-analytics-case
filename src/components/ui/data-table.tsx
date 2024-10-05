import React from "react";

interface IProps {
  columns: string[];
  data: any;
  isPending: boolean;
  onRowClick: any;
}

const DataTable: React.FC<IProps> = ({
  columns,
  data,
  isPending,
  onRowClick,
}) => {
  return (
    <table className="content-page-body-table">
      <tr>
        {columns.map((columnName: string, index: number) => (
          <th key={index}>{columnName}</th>
        ))}
      </tr>
      {isPending && <>Loading...</>}
      {data &&
        data.Search &&
        data.Search.length > 0 &&
        data.Search.map((content: any, index: number) => (
          <tr onClick={() => onRowClick(content.imdbID)} key={index}>
            <td>{content.Title}</td>
            <td>{content.Year}</td>
            <td>{content.Type}</td>
            <td>{content.imdbID}</td>
          </tr>
        ))}
    </table>
  );
};

export default DataTable;
