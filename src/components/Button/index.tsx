import { ButtonContainer } from "./styles";

import { IButtonProps } from "./types";

const Button = ({ title, onClick, isDisable }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={isDisable}>{title} </ButtonContainer>;
};

export default Button;
