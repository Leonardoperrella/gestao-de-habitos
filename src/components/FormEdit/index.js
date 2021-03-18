import { useContext, useState } from "react";
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
import { UserContext } from "../../providers/UserProvider";

const FormEdit = ({
  children,
  handleSubmit,
  name,
  deletePath,
  subscribePath,
  idParams,
}) => {
  const history = useHistory();
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const { user, setUser } = useContext(UserContext);
  const { group: groupID } = user;
  console.log(groupID);
  ///////////////////

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
      .then((response) => {
        if (response.statusText === "OK") {
          setUser({ ...response.data.user });
        }
      });
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
          <>
            {idParams === groupID ? (
              <FormEditButton
                isRemovable
                style={{ cursor: "not-allowed", opacity: "0.6" }}
              >
                Subscribed
              </FormEditButton>
            ) : (
              <FormEditButton
                isRemovable
                onClick={() => handleSubscribe(subscribePath)}
              >
                Subscribe {name}
              </FormEditButton>
            )}
          </>
        )}
      </FormEditWrap>
    </>
  );
};

export default FormEdit;
