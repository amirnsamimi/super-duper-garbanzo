import { type ChangeEvent } from "react";

const BaseInput = ({
  name,
  placeholder,
  onChange,
}: {
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default BaseInput;
