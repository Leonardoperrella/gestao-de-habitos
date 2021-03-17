import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardGoals from "../../components/CardGoals";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import api from "../../services/api";

const GroupGoals = () => {
  const [goals, setGoals] = useState([]);
  const state = useParams();

  const getGroupGoals = async () => {
    const response = await api.get(`/groups/${state.id}/`);
    setGoals(response.data.goals);
    console.log(response.data.goals);
  };

  useEffect(() => {
    getGroupGoals();
  }, []);

  return (
    <GlobalContainer>
      <GlobalWrap>
        <h2>Group Goals</h2>
        {goals?.map(
          ({ title, difficulty, how_much_achieved, achieved }, index) => (
            <CardGoals
              key={index}
              title={title}
              difficulty={difficulty}
              how_much_achieved={how_much_achieved}
              achieved={achieved}
            />
          )
        )}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default GroupGoals;
