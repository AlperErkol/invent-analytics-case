import React from "react";

interface IProps {
  columns: string[];
  data: any;
  isPending: boolean;
  onRowClick: any;
}

const DataTable: React.FC<IProps> = ({ columns, data, onRowClick }) => {
  const contents = data?.Search;
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
    </div>
  );
};

export default DataTable;
