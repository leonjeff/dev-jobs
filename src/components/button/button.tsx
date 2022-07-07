export type ButtonProps = {
  name: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  const { handleClick, name } = props;

  return <button onClick={handleClick}>{name}</button>;
};

export { Button };
