import React from "react";
import { Habit, ContainerCarrosel } from "./style";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import api from "../../services/api";

const CarrosselHabit = () => {
  const [habits, setHabits] = React.useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  React.useEffect(() => {
    api
      .get(`/habits/personal/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const habitArr = response.data.filter(
          ({ achieved }) => achieved === false
        );
        setHabits(habitArr);
      })
      .catch((e) => console.log(e));
  }, [token]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContainerCarrosel>
      <Slider {...settings}>
        {habits.map((habit, index) => (
          <div key={habit.id}>
            <Habit>
              <h2>{habit.title}</h2>

              <p>
                {habit.category} - {habit.difficulty}
              </p>

              <p>Frequencia - {habit.frequency}</p>

              <p>Not Completed</p>
            </Habit>
          </div>
        ))}
      </Slider>
    </ContainerCarrosel>
  );
};

export default CarrosselHabit;
