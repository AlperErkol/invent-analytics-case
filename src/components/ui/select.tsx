import React, { ChangeEvent } from "react";
import Label from "./label";
import { Option } from "../../types/content";

interface SelectProps {
  options: Option[];
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  disabled?: boolean;
  [x: string]: any;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="select-container flex flex-col">
      {label && <Label text={label} />}
      <select
        className="w-48 h-10 border rounded-md"
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
