import { useState } from "react";
import { ContainerInput, Input, Label, Span, MessageError } from "./style";

const FormUserInput = ({ children, error, inputRef, name, type }) => {
  const [activeInput, setActiveInput] = useState(false);

  const handleChange = ({ target }) => {
    if (target.value !== "") {
      setActiveInput(true);
    } else {
      setActiveInput(false);
    }
  };

  const handleBlur = ({ target }) => {
    if (target.value === "") {
      setActiveInput(false);
    }
  };

  const handleFocus = () => {
    setActiveInput(true);
  };
  console.log(error);

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
        />
        <MessageError error={error}>{error.message}</MessageError>
      </Label>
      {error && <MessageError>{error.message}</MessageError>}
    </ContainerInput>
  );
};

export default FormUserInput;
