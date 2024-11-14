import { ButtonContainer } from "./styles";

const Button = ({label, onClick,isOperation = false, isBackspace = false}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" isOperation={isOperation} isBackspace={isBackspace}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  