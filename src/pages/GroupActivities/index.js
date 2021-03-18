import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import api from "../../services/api";
import CardActivite from "../../components/CardActivite";

const GroupActivities = () => {
  const [activities, setActivities] = useState([]);
  const state = useParams();

  const getGroupActivities = async () => {
    const response = await api.get(`/groups/${state.id}/`);
    setActivities(response.data.activities);
  };

  useEffect(() => {
    getGroupActivities();
  }, []);

  return (
    <GlobalContainer>
      <GlobalWrap>
        {activities?.map(({ title, id }) => (
          <CardActivite key={id} title={title} id={id} />
        ))}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default GroupActivities;
