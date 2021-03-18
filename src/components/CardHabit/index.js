import React from "react";
import { HabitItem } from "./style";
import { useHistory } from "react-router-dom";

const CardHabit = ({
  id,
  title,
  category,
  difficulty,
  frequency,
  completed = false,
}) => {
  const history = useHistory();

  console.log(id);

  const handleHistory = (id) => {
    history.push(`/edit-habit/${id}/`);
  };

  return (
    <HabitItem onClick={() => handleHistory(id)}>
      <h2>{title}</h2>
      <p>
        {category} - {difficulty}
      </p>

      <p>Frequencia - {frequency}</p>

      {completed ? <p>Completed</p> : <p>Not Completed</p>}
    </HabitItem>
  );
};

export default CardHabit;
