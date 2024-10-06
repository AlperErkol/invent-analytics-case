interface IProps {
  message: string;
}

const NoData: React.FC<IProps> = ({ message }) => {
  return (
    <div className="data-status-boundry">
      <p>{message}</p>
    </div>
  );
};

export default NoData;
