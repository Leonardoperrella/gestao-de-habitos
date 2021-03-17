import { useState } from "react";
import api from "../../services/api";
import {
  FormEditContainer,
  FormEditTitle,
  FormEditButton,
  FormWrap,
  FormEditWrap,
  FormBackButtonIcon,
  FormBackButtonText,
  FormBackButtonWrap,
} from "./style";
import { useHistory } from "react-router-dom";

const FormEdit = ({ children, handleSubmit, name, origin, deletePath }) => {
  const history = useHistory();
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const handleDelete = (path) => {
    api
      .delete(path, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response, "deletado"));
  };

  const handleBackToOrigin = (path) => {
    history.push(path);
  };

  return (
    <FormWrap>
      <FormEditWrap>
        <FormBackButtonWrap>
          <FormBackButtonIcon onClick={() => handleBackToOrigin(origin)} />
        </FormBackButtonWrap>
        <FormEditTitle>Edit {name}</FormEditTitle>
      </FormEditWrap>
      <FormEditContainer onSubmit={handleSubmit}>
        {children}
        <FormEditButton>Save edit</FormEditButton>
      </FormEditContainer>
      <FormEditButton isRemovable onClick={() => handleDelete(deletePath)}>
        {" "}
        Delete {name}
      </FormEditButton>
    </FormWrap>
  );
};

export default FormEdit;
