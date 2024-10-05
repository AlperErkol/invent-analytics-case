import React from "react";

interface IProps {
  rating: {
    Source: string;
    Value: string;
  };
}

const Rating: React.FC<IProps> = ({ rating }) => {
  const { Source, Value } = rating;
  return (
    <div className="flex flex-col items-center text-sm">
      <p>{Source}</p>
      <span className="text-3xl font-semibold">{Value}</span>
    </div>
  );
};

export default Rating;
