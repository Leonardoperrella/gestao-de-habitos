import React from "react";
import { ActiviteItem } from "./style";
import { useHistory } from "react-router-dom";

const CardActivite = ({ id, title, group }) => {
  const history = useHistory();

  const handleHistory = (id, group) => {
    history.push(`/edit-activite/${id}`, { group: group });
  };

  return (
    <ActiviteItem onClick={() => handleHistory(id, group)}>
      <h3>{title}</h3>
    </ActiviteItem>
  );
};

export default CardActivite;
