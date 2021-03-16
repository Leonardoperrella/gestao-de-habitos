import React from "react";
import { useHistory } from "react-router-dom";
import { GroupItem } from "./style";

const CardGroup = ({ id, name, description, category }) => {
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/edit-group/${id}`);
  };

  return (
    <GroupItem onClick={() => handleClick(id)}>
      <h2>{name}</h2>

      <p>Description - {description}</p>

      <p>Category - {category.split("/")[1]}</p>
    </GroupItem>
  );
};

export default CardGroup;
