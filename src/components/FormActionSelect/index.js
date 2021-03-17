import React from "react";
import { MessageError } from "../FormUserInput/style";
import { ContainerSelect, Select } from "./style";

const FormActionSelect = ({ children, inputRef, error, name, value }) => {
  return (
    <ContainerSelect>
      <Select ref={inputRef} name={name} value={value}>
        <option value="">{name}</option>
        {children.map(({ value, content }, index) => (
          <option key={index} value={value}>
            {content}
          </option>
        ))}
      </Select>
      {error && <MessageError>{error.message}</MessageError>}
    </ContainerSelect>
  );
};

export default FormActionSelect;
