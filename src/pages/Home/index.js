import React from "react";
import { useHistory } from "react-router";
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
  LinkAllGroups,
} from "./style";
import { UserContext } from "../../providers/UserProvider";

const Home = () => {
  const [group, setGroup] = React.useState({});
  const [showGroup, setShowGroup] = React.useState(false);
  const history = useHistory();

  const { group: idGroup } = React.useContext(UserContext);

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
          <HomeTitle small>Group</HomeTitle>
          <LinkAllGroups onClick={() => handleNavigation("/groups")}>
            See all groups
          </LinkAllGroups>
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
              <HomeTitle small>Group not found</HomeTitle>
            )}
          </Group>
        </HomeGroupWrap>
      </HomeContainer>
      <Menu />
    </div>
  );
};

export default Home;
