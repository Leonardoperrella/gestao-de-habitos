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

const FormEdit = ({
  children,
  handleSubmit,
  name,
  deletePath,
  subscribePath,
}) => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const handleDelete = (deletePath) => {
    api
      .delete(deletePath, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response, "deletado"));
  };

  const handleSubscribe = (subscribePath) => {
    api
      .post(
        subscribePath,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => console.log(response, "subscribed"));
  };

  return (
    <FormWrap>
      <FormEditWrap>
        <FormBackButtonWrap>
          <FormBackButtonIcon />
        </FormBackButtonWrap>
        <FormEditTitle>Edit {name}</FormEditTitle>
      </FormEditWrap>
      <FormEditContainer onSubmit={handleSubmit}>
        {children}
        <FormEditButton>Save edit</FormEditButton>
      </FormEditContainer>
      {!subscribePath ? (
        <FormEditButton isRemovable onClick={() => handleDelete(deletePath)}>
          Delete {name}
        </FormEditButton>
      ) : (
        <FormEditButton
          isRemovable
          onClick={() => handleSubscribe(subscribePath)}
        >
          Subscribe {name}
        </FormEditButton>
      )}
    </FormWrap>
  );
};

export default FormEdit;
