import { ChangeEvent } from "react";
import Label from "./label";

interface InputProps {
  label?: string;
  type?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  [x: string]: any;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <div className="input-container flex flex-col">
      {label && <Label text={label} />}
      <input
        className="w-48 h-10 border px-2 rounded-md"
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
