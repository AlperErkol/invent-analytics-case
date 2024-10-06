interface IProps {
  message?: string;
}

const DataError: React.FC<IProps> = ({ message }) => {
  return (
    <div className="data-status-boundry">
      <p>{message || "An error occured!"}</p>
    </div>
  );
};

export default DataError;
