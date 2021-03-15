import React from "react";
import { HabitItem } from "./style";

const CardHabit = ({
  title,
  category,
  difficulty,
  frequency,
  completed = false,
}) => {
  return (
    <HabitItem>
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
