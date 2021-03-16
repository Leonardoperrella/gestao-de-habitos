import { useState } from "react";
import { ContainerInput, Input, Label, Span, MessageError } from "./style";

const FormUserInput = ({
  children,
  error,
  inputRef,
  name,
  type,
  value,
  setInputValue,
}) => {
  const [activeInput, setActiveInput] = useState(false);

  const handleChange = ({ target }) => {
    if (target.value !== "") {
      setActiveInput(true);
    } else {
      setActiveInput(false);
    }
    setInputValue(target.value);
  };

  const handleBlur = ({ target }) => {
    if (target.value === "") {
      setActiveInput(false);
    }
  };

  const handleFocus = () => {
    setActiveInput(true);
  };

  return (
    <ContainerInput>
      <Label>
        <Span activeInput={activeInput} error={error}>
          {children}
        </Span>
        <Input
          type={type}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          error={error}
          name={name}
          value={value}
        />
      </Label>
      {error && <MessageError>{error.message}</MessageError>}
    </ContainerInput>
  );
};

export default FormUserInput;
