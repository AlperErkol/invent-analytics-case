import React from "react";

interface IProps {
  title: string;
  description: string;
}

const ContentDetailMeta: React.FC<IProps> = ({ title, description }) => {
  return (
    <div className="flex items-center border-b py-4 gap-4">
      <span className="font-bold text-lg">{title}</span>
      <span>{description}</span>
    </div>
  );
};

export default ContentDetailMeta;
