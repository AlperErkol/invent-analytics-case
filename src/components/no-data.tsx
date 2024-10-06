interface IProps {
  message: string;
}

const NoData: React.FC<IProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default NoData;
