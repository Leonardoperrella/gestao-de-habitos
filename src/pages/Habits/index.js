import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useHabits } from "../../providers/Habits";
import CardHabit from "../../components/CardHabit";
import { HabitsTitle } from "./style";

const Habits = () => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const { habits, setHabits } = useHabits();

  const getUserHabits = async () => {
    await api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data));
  };

  useEffect(() => {
    getUserHabits();
  }, []);
  localStorage.setItem("habits", JSON.stringify(habits));

  return (
    <GlobalContainer>
      <HabitsTitle>Habits</HabitsTitle>
      <GlobalWrap>
        {habits.map(
          ({ id, title, category, difficulty, frequency, completed }, key) => (
            <CardHabit
              title={title}
              category={category}
              difficulty={difficulty}
              frequency={frequency}
              completed={completed}
              key={key}
              id={id}
            />
          )
        )}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default Habits;
