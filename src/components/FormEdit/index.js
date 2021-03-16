import { useState } from "react";
import api from "../../services/api";
import {
  FormEditContainer,
  FormEditTitle,
  FormEditButton,
  FormWrap,
} from "./style";

const FormEdit = ({ children, handleSubmit, name, id }) => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const handleDelete = (id) => {
    api
      .delete(`habits/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response, "deletado"));
  };

  return (
    <FormWrap>
      <FormEditContainer onSubmit={handleSubmit}>
        <FormEditTitle>Edit {name}</FormEditTitle>
        {children}
        <FormEditButton>Save edit</FormEditButton>
      </FormEditContainer>
      <FormEditButton isRemovable onClick={() => handleDelete(id)}>
        {" "}
        Delete {name}
      </FormEditButton>
    </FormWrap>
  );
};

export default FormEdit;
