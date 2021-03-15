import { useState, useEffect } from "react";
import api from "../../services/api";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import { useGroups } from "../../providers/Groups";

const Groups = () => {
  const { groups, setGroups } = useGroups();
  const [nextPage, setNextPage] = useState("1");
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });
  const [user_id] = useState(() => {
    const sessionId = localStorage.getItem("user_id") || "";
    return JSON.parse(sessionId);
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
        } else {
          setNextPage(response.data.next.match(patt)[0]);
        }
      })
      .catch((e) => console.log(e));
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
        {groups.flat().map((group, index) => (
          <Card key={index}>{group.name}</Card>
        ))}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default Groups;
