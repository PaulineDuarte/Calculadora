import { ButtonContainer } from "./styles";

const Button = ({label, onclick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  