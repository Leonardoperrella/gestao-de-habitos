import React from "react";
import CarrosselHabit from "../../components/CarroselHabit";
import Menu from "../../components/Menu";
import CardGroup from "../../components/CardGroup";
import api from "../../services/api";
import {
  HomeContainer,
  HomeTitle,
  HomeHabitWrap,
  HomeGroupWrap,
  Group,
} from "./style";
import { UserContext } from "../../providers/UserProvider";

const Home = () => {
  const [group, setGroup] = React.useState({});
  const [showGroup, setShowGroup] = React.useState(false);

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

  return (
    <div>
      <HomeContainer>
        <HomeTitle>Home</HomeTitle>

        <HomeHabitWrap>
          <HomeTitle small>To do</HomeTitle>
        </HomeHabitWrap>
      </HomeContainer>

      <CarrosselHabit />

      <HomeContainer>
        <HomeGroupWrap>
          <HomeTitle small>Groups</HomeTitle>

          <Group>
            {showGroup ? (
              <CardGroup
                id={id}
                name={name}
                description={description}
                category={category}
              />
            ) : (
              "Nenhum grupo encontrado"
            )}
          </Group>
        </HomeGroupWrap>
      </HomeContainer>
      <Menu />
    </div>
  );
};

export default Home;
