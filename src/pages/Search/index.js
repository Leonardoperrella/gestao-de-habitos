import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import { SearchBar, SearchInput, SearchTitle, SearchContainer } from "./style";
import SearchIcon from "@material-ui/icons/Search";
import { useState, useEffect } from "react";
import api from "../../services/api";
import CardSearch from "../../components/CardSearch";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchedItens, setSearchedItens] = useState([]);
  const [groups, setGroups] = useState([]);
  const [habits, setHabits] = useState([]);
  const [nextPage, setNextPage] = useState("1");
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });
  const patt = /\d+$/;

  const getUserGroups = async (page) => {
    await api
      .get(`/groups/?category=habitorant/&page=${page}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const pageGroups = response.data.results;

        if (pageGroups.length > 0) {
          setGroups([...groups, pageGroups]);
        }
        if (!response.data.next) {
          setNextPage(response.data.next);
        } else {
          setNextPage(response.data.next.match(patt)[0]);
        }
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const getUserHabits = async () => {
    await api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data));
  };

  useEffect(() => {
    if (!!nextPage) {
      getUserGroups(nextPage);
      getUserHabits();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPage]);

  useEffect(() => {
    getSearchedItens();
  }, [search]);

  const getSearchedItens = () => {
    if (search === "") {
      setSearchedItens([]);
      return;
    }
    const allItens = [...groups, ...habits].flat();
    const regExp = new RegExp([search]);
    console.log(regExp);
    setSearchedItens(
      allItens.filter(
        ({ title, name, description, frequency, category, difficulty }) => {
          // regExp.test(title || name)
          if (
            regExp.test(title || name) ||
            regExp.test(description) ||
            regExp.test(frequency) ||
            regExp.test(category) ||
            regExp.test(difficulty)
          ) {
            return true;
          }
        }
      )
    );
  };

  // const handleSearch = (e) => {
  //   console.log(e.target.value);
  //   setSearch(e.target.value);
  //   getSearchedItens();
  // };
  console.log(searchedItens);

  return (
    <>
      <GlobalContainer>
        <SearchTitle>Search</SearchTitle>

        <SearchBar>
          <SearchIcon />
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search something…"
          />
        </SearchBar>
        <SearchContainer>
          {searchedItens.map(
            ({ title, name, description, frequency, category, difficulty }) => (
              <CardSearch
                title={title}
                name={name}
                description={description}
                frequency={frequency}
                difficulty={difficulty}
                category={category}
              />
            )
          )}
        </SearchContainer>
      </GlobalContainer>
      <Menu />
    </>
  );
};

export default Search;
