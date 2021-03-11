import {
  MenuContainer,
  MenuHomeButton,
  MenuHomeLogo,
  MenuIcon,
  MenuIconsWrap,
} from "./style";
import { Search, Favorite, Group, Person } from "@material-ui/icons/";
import Habitorant from "../../Images/Habitorant.png";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuIconsWrap>
        <MenuIcon edge="start" aria-label="open drawer">
          <Favorite />
        </MenuIcon>
        <MenuIcon edge="start" aria-label="open drawer">
          <Group />
        </MenuIcon>
        <MenuHomeButton>
          <MenuHomeLogo src={Habitorant} />
        </MenuHomeButton>
        <MenuIcon edge="end">
          <Person />
        </MenuIcon>
        <MenuIcon color="black">
          <Search />
        </MenuIcon>
      </MenuIconsWrap>
    </MenuContainer>
  );
};

export default Menu;
