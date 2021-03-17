import GlobalContainer from "../../components/GlobalContainer";
import Menu from "../../components/Menu";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useHabits } from "../../providers/Habits";
import CardHabit from "../../components/CardHabit";
import {
  HabitsTitle,
  HabitsWrap,
  HabitsTitleWrap,
  HabitsButton,
} from "./style";
import { useHistory } from "react-router";

const Habits = () => {
  const history = useHistory();

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

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <GlobalContainer>
      <HabitsTitleWrap>
        <HabitsTitle>Habits</HabitsTitle>
        <HabitsButton onClick={() => handleNavigation("/add-habit")}>
          Add Habits
        </HabitsButton>
      </HabitsTitleWrap>
      <HabitsWrap>
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
      </HabitsWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default Habits;
