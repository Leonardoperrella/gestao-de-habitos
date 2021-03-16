import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import { SearchBar, SearchInput, SearchTitle } from "./style";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <>
      <GlobalContainer>
        <SearchTitle>Search</SearchTitle>
        <GlobalWrap>
          <SearchBar>
            <SearchIcon />
            <SearchInput placeholder="Search something…" />
          </SearchBar>
        </GlobalWrap>
      </GlobalContainer>
      <Menu />
    </>
  );
};

export default Search;
