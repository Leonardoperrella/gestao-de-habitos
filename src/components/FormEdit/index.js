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
  FormModalConfirmDelete,
  FormBackgroundModal,
} from "./style";
import { useHistory } from "react-router-dom";

const FormEdit = ({
  children,
  handleSubmit,
  name,
  deletePath,
  subscribePath,
}) => {
  const history = useHistory();
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    api
      .delete(deletePath, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response, "deletado"))
      .then((response) => {
        history.goBack();
      });
    setShowModal(false);
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

  const handleDeleteModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <FormEditBackButtonWrap>
        <FormBackgroundModal show={showModal} />
        <FormModalConfirmDelete show={showModal}>
          <h1>Delete?</h1>

          <button onClick={() => handleDelete()}>Yes</button>
          <button onClick={() => handleDeleteModal()}>No</button>
        </FormModalConfirmDelete>
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
          <FormEditButton isRemovable onClick={() => handleDeleteModal()}>
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
    </>
  );
};

export default FormEdit;
