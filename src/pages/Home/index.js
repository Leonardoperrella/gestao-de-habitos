import CarrosselHabit from "../../components/CarroselHabit";
import Menu from "../../components/Menu";
import {
  HomeContainer,
  HomeTitle,
  HomeHabitWrap,
  HomeGroupWrap,
} from "./style";

const Home = () => {
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
        </HomeGroupWrap>
      </HomeContainer>
      <Menu />
    </div>
  );
};

export default Home;
