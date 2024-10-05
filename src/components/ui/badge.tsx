interface IProps {
  label: string;
}

const Badge: React.FC<IProps> = ({ label }) => {
  return (
    <div className="inline rounded-md py-2 px-3 text-sm font-medium border">
      {label}
    </div>
  );
};

export default Badge;
