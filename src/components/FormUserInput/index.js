import { useState } from "react";
import { ContainerInput, Input, Label, Span, SpanError } from "./style";

const FormUserInput = ({ children, error, helperText, register, name }) => {
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

  return (
    <ContainerInput>
      <Label>
        <Span activeInput={activeInput}>{children}</Span>
        <Input
          type="text"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={register}
          name={name}
        />
        <SpanError error={error}>{helperText}</SpanError>
      </Label>
    </ContainerInput>
  );
};

export default FormUserInput;
