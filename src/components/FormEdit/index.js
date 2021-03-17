import { useState } from "react";
import api from "../../services/api";
import {
  FormEditContainer,
  FormEditTitle,
  FormEditButton,
  FormEditWrap,
  FormEditTextWrap,
  FormEditBackButtonIcon,
  FormEditBackButtonWrap,
} from "./style";
import { useHistory } from "react-router-dom";

const FormEdit = ({
  children,
  handleSubmit,
  name,
  origin,
  deletePath,
  subscribePath,
}) => {
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
    <>
      <FormEditBackButtonWrap>
        <FormEditBackButtonIcon onClick={() => history.goBack()} />
      </FormEditBackButtonWrap>
      <FormEditWrap>
        <FormEditTextWrap>
          <FormEditTitle>Edit {name}</FormEditTitle>
        </FormEditTextWrap>
        <FormEditContainer onSubmit={handleSubmit}>
          {children}
          <FormEditButton>Save edit</FormEditButton>
        </FormEditContainer>
        {!subscribePath ? (
          <FormEditButton isRemovable onClick={() => handleDelete(deletePath)}>
            Delete {name}
          </FormEditButton>
        ) : (
          <FormEditButton isRemovable>Subscribe {name}</FormEditButton>
        )}
      </FormEditWrap>
    </>
  );
};

export default FormEdit;
