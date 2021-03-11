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
          <HomeTitle small>To do today</HomeTitle>
        </HomeHabitWrap>
        <HomeGroupWrap>
          <HomeTitle small>Groups</HomeTitle>
        </HomeGroupWrap>
      </HomeContainer>
      <Menu />
    </div>
  );
};

export default Home;
