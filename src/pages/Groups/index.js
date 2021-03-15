import { useState, useEffect } from "react";
import api from "../../services/api";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import { useGroups } from "../../providers/Groups";
import GobalLoading from "../../components/GobalLoading";

const Groups = () => {
  const { groups, setGroups } = useGroups();
  const [nextPage, setNextPage] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const patt = /\d+$/;
  const getUserGroups = async (page) => {
    await api
      .get(`/groups/?page=${page}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const pageGroups = response.data.results.filter(
          (group) => group.category.split("/")[0] === "habitorant"
        );

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
        console.log(e);
        setIsLoading(true);
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
          groups.flat().map(({ id }) => <Card key={id} />)
        ) : (
          <GobalLoading />
        )}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default Groups;
