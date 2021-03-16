import React from "react";
import { ContainerCarrosel } from "./style";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import api from "../../services/api";
import CardHabit from "../CardHabit";

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
        {habits.map(({ id, title, category, difficulty, frequency }, index) => (
          <div key={index}>
            <CardHabit
              id={id}
              title={title}
              category={category}
              difficulty={difficulty}
              frequency={frequency}
            >
              <h2>{title}</h2>

              <p>
                {category} - {difficulty}
              </p>

              <p>Frequencia - {frequency}</p>

              <p>Not Completed</p>
            </CardHabit>
          </div>
        ))}
      </Slider>
    </ContainerCarrosel>
  );
};

export default CarrosselHabit;
