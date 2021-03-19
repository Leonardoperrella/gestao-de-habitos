import React from "react";

import { useHistory } from "react-router";
import CarrosselHabit from "../../components/CarroselHabit";
import Menu from "../../components/Menu";
import CardGroup from "../../components/CardGroup";
import api from "../../services/api";

import { HabitsButton } from "../Habits/style";

import {
  HomeContainer,
  HomeTitle,
  HomeHabitWrap,
  HomeGroupWrap,
  Group,
  ButtonAllGroups,
  DivButtonAllGroups,
  SubTitle,
  Notification,
  DivButtonAllHabit,
} from "./style";
import { UserContext } from "../../providers/UserProvider";

const Home = () => {
  const [group, setGroup] = React.useState({});
  const [showGroup, setShowGroup] = React.useState(false);
  const history = useHistory();

  const { user } = React.useContext(UserContext);
  const { group: idGroup } = user;

  React.useEffect(() => {
    if (idGroup) {
      api
        .get(`/groups/${idGroup}/`)
        .then((request) => {
          setGroup(request.data);
          setShowGroup(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idGroup]);

  const { id, name, description, category } = group;

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <>
      <HomeContainer>
        <HomeTitle>Home</HomeTitle>

        <HomeHabitWrap>
          <SubTitle>To do</SubTitle>
        </HomeHabitWrap>
      </HomeContainer>

      {showGroup ? (
        <CarrosselHabit />
      ) : (
        <DivButtonAllHabit>
          <Notification>You don't have tasks to do!</Notification>
          <ButtonAllGroups
            variant="contained"
            onClick={() => handleNavigation("/add-habit")}
            disableElevation
          >
            Add habit
          </ButtonAllGroups>
        </DivButtonAllHabit>
      )}

      <HomeContainer>
        <HomeGroupWrap>
          <SubTitle>Group</SubTitle>

          <DivButtonAllGroups>
            <ButtonAllGroups
              variant="contained"
              onClick={() => handleNavigation("/groups")}
              disableElevation
            >
              See all groups
            </ButtonAllGroups>
          </DivButtonAllGroups>

          <Group>
            {showGroup ? (
              <CardGroup
                id={id}
                name={name}
                description={description}
                category={category}
                details={true}
              />
            ) : (
              <Notification>You are not subscribed in any groups!</Notification>
            )}
          </Group>
        </HomeGroupWrap>
      </HomeContainer>

      <Menu />
    </>
  );
};

export default Home;
