import { useState, useEffect } from "react";
import api from "../../services/api";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import CardGroup from "../../components/CardGroup";
import GobalLoading from "../../components/GobalLoading";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [nextPage, setNextPage] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
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
          setIsLoading(false);
        } else {
          setNextPage(response.data.next.match(patt)[0]);
        }
      })
      .catch((e) => {
        console.log(e.response);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!!nextPage) {
      getUserGroups(nextPage);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPage]);

  return (
    <GlobalContainer>
      <GlobalWrap>
        {!isLoading ? (
          groups
            .flat()
            .map(({ id, name, description, category }) => (
              <CardGroup
                key={id}
                id={id}
                name={name}
                description={description}
                category={category}
              />
            ))
        ) : (
          <GobalLoading />
        )}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default Groups;
