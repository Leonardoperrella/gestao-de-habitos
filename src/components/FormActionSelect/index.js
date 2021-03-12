import React from "react";
import { ContainerSelect, Select } from "./style";

const FormActionSelect = ({ children = [] }) => {
  return (
    <ContainerSelect>
      <Select>
        <option value="">Selecione uma opção</option>
        {children.map(({ value, content }) => (
          <option value={value}>{content}</option>
        ))}
      </Select>
    </ContainerSelect>
  );
};

export default FormActionSelect;
