import React, { useRef } from "react";
import { Carrosel, ContainerCarrosel, Habit } from "./style";

import api from "../../services/api";

const CarrosselHabit = () => {
  const [habits, setHabits] = React.useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [startEixoX, setStartEixoX] = React.useState(0);
  const [endEixoX, setEndEixoX] = React.useState(0);
  const [attElement, setAttElement] = React.useState(0);

  const refContainer = useRef();
  const refHabit = useRef([]);
  const containerHabit = refContainer.current;
  const habitElements = refHabit.current;

  React.useEffect(() => {
    api
      .get(`/habits/personal/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((e) => console.log(e));
  }, [token]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    console.log("clicou");

    if (!isMouseDown) {
      setIsMouseDown(true);
      setStartEixoX(e.clientX - startEixoX);
    }

    if (endEixoX === 0) {
      setEndEixoX(
        window.innerWidth -
          habitElements[habitElements.length - 1].getBoundingClientRect()
            .right +
          10
      );
    }
  };

  const handleMouseUp = (e) => {
    console.log("tirou o dedo do mouse");

    if (isMouseDown) {
      setStartEixoX(e.clientX - startEixoX);
    }

    // verificar o ultimo elemento se distanciou da margen do navegador
    const endElement = habitElements[
      habitElements.length - 1
    ].getBoundingClientRect().right;

    const rightX = window.innerWidth - endElement;

    if (rightX > 50) {
      containerHabit.style.transform = `translatex(${endEixoX - 20}px)`;
      setStartEixoX(endEixoX - 20);
    }

    // verificar o primeiro elemento se distanciou da margen do navegador
    if (containerHabit.getBoundingClientRect().x > -100) {
      containerHabit.style.transform = `translatex(0px)`;
      setStartEixoX(0);
    }

    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (isMouseDown) {
      moveHabitad(e.clientX);
    }
  };

  const moveHabitad = (moveEixoX) => {
    console.log("moveu");
    const valueX = moveEixoX - startEixoX;

    if (containerHabit.getBoundingClientRect().x < 15) {
      containerHabit.style.transform = `translatex(${valueX}px)`;
    }
  };

  const handleNext = () => {
    let nextElement;
    const lengthHabits = habitElements.length - 1;

    const perPage = verifyElementsPerPage();

    if (attElement + perPage > lengthHabits) {
      nextElement = habitElements[0].getBoundingClientRect().x;
      setStartEixoX(0);
      setAttElement(0);
    } else if (attElement + perPage * 2 > lengthHabits) {
      nextElement = habitElements[
        lengthHabits - (perPage - 1)
      ].getBoundingClientRect().x;

      setStartEixoX(startEixoX + nextElement - 15);
      setAttElement(lengthHabits - (perPage - 1));
    } else {
      nextElement = habitElements[attElement + perPage].getBoundingClientRect()
        .x;
      setStartEixoX(startEixoX + nextElement - 15);
      setAttElement(attElement + perPage);
    }

    containerHabit.style.transform = `translatex(-${
      nextElement + startEixoX - 15
    }px)`;
  };

  const handlePrev = () => {
    let nextElement;
    const lengthHabits = habitElements.length - 1;

    const perPage = verifyElementsPerPage();

    if (attElement === 0) {
      console.log("first");
      nextElement = habitElements[
        lengthHabits - (perPage - 1)
      ].getBoundingClientRect().x - 15;

      translateItem(nextElement, startEixoX);

      setStartEixoX(startEixoX + nextElement);
      setAttElement(lengthHabits - (perPage - 1));
    } else if (attElement - perPage < 0) {
      console.log("second");
      nextElement = habitElements[0].getBoundingClientRect().x;

      containerHabit.style.transform = `translatex(0px)`;

      setStartEixoX(0);
      setAttElement(0);
    } else {
      console.log("third");

      nextElement =
        habitElements[attElement - perPage].getBoundingClientRect().x - 15;

      translateItem(nextElement, startEixoX);

      setStartEixoX(nextElement + startEixoX);
      setAttElement(attElement - perPage);
    }
  };

  const translateItem = (nextElement, eixoX) => {
    console.log(nextElement, eixoX);

    containerHabit.style.transform = `translatex(-${
      nextElement + eixoX - 15
    }px)`;
  };

  const verifyElementsPerPage = () => {
    return Math.floor(window.innerWidth / habitElements[0].offsetWidth);
  };

  return (
    <ContainerCarrosel>
      <Carrosel
        ref={refContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        // onTouchStart={handleMouseDown}
        // onTouchMove={handleTouchMove}
      >
        {habits.map((habit, index) => (
          <Habit key={habit.id} ref={(el) => (refHabit.current[index] = el)}>
            <h2>{habit.title}</h2>

            <p>{habit.category}</p>

            <p>{habit.difficulty}</p>

            <p>Frequencia: {habit.frequency}</p>

            <p>Not Completed</p>
          </Habit>
        ))}
      </Carrosel>

      <button onClick={handlePrev}>left</button>
      <button onClick={handleNext}>right</button>
    </ContainerCarrosel>
  );
};

export default CarrosselHabit;
