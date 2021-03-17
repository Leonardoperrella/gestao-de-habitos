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
  deletePath,
  origin,
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
    <FormEditWrap>
      <FormEditBackButtonWrap>
        <FormEditBackButtonIcon onClick={() => history.goBack()} />
      </FormEditBackButtonWrap>
      <FormEditWrap>
        <FormEditBackButtonWrap>
          <FormEditBackButtonIcon onClick={() => handleBackToOrigin(origin)} />
        </FormEditBackButtonWrap>
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
    </FormEditWrap>
  );
};

export default FormEdit;
