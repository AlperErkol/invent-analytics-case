interface IProps {
  title: string;
}
const PageTitle: React.FC<IProps> = ({ title }) => {
  return (
    <h1 className="mb-1 text-3xl font-bold leading-tight tracking-tighter">
      {title}
    </h1>
  );
};

export default PageTitle;
