import React from "react";
import { ContainerSelect, Select } from "./style";

const FormActionSelect = ({ children, inputRef, error, name, value }) => {
  return (
    <ContainerSelect>
      <Select ref={inputRef} name={name} value={value}>
        <option value="" disabled>
          {name}
        </option>
        {children.map(({ value, content, selected }, index) => (
          <option key={index} value={value} selected={selected}>
            {content}
          </option>
        ))}
      </Select>
    </ContainerSelect>
  );
};

export default FormActionSelect;
