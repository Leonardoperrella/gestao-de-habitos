import React from "react";
import { ContainerSelect, Select } from "./style";

const FormActionSelect = ({ children = [], inputRef, error, name }) => {
  return (
    <ContainerSelect>
      <Select ref={inputRef} name={name}>
        <option value="">Selecione uma opção</option>
        {children.map(({ value, content }, index) => (
          <option key={index} value={value}>
            {content}
          </option>
        ))}
      </Select>
    </ContainerSelect>
  );
};

export default FormActionSelect;
