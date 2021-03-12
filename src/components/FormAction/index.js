import React from "react";
import { Form } from "./style";

import { ButtonSubmit, ButtonIcon } from "../../components/FormUser/style";

const FormAction = ({ children, handleSubmit, title }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <h1>{title}</h1>

      {children}

      <ButtonSubmit type="submit">
        <ButtonIcon />
      </ButtonSubmit>
    </Form>
  );
};

export default FormAction;
