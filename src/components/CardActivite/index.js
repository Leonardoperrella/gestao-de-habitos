import React from "react";
import { ActiviteItem } from "./style";
import { useHistory } from "react-router-dom";

const CardActivite = ({ id, title }) => {
  const history = useHistory();

  const handleHistory = (id) => {
    history.push(`/edit-activite/${id}`);
  };

  return (
    <ActiviteItem onClick={() => handleHistory(id)}>
      <h2>{title}</h2>
    </ActiviteItem>
  );
};

export default CardActivite;
