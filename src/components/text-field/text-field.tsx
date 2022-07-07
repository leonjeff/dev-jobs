export type TextFieldProps = {
  placeholder: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = (props: TextFieldProps) => {
  const { placeholder, value, handleChange } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export { TextField };
