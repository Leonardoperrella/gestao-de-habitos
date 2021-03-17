import { useHistory } from "react-router";
import { GoalsContainer } from "./style";

const CardGoals = ({
  title,
  difficulty,
  how_much_achieved,
  achieved = false,
}) => {
  // const history = useHistory()
  // const handleClick= (id) => {
  //     history.push(``)
  // }

  return (
    <>
      {how_much_achieved === 100 ? (
        <GoalsContainer style={{ background: "#10AC84" }}>
          <h2>{title}</h2>
          <p>Difficulty - {difficulty}</p>
          <p>Frequency - {how_much_achieved}%</p>
        </GoalsContainer>
      ) : (
        <GoalsContainer style={{ background: "#FF4654" }}>
          <h2>{title}</h2>
          <p>Difficulty - {difficulty}</p>
          <p>Frequency - {how_much_achieved}%</p>
        </GoalsContainer>
      )}
    </>
  );
};
export default CardGoals;
