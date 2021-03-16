import { useEffect, useState } from "react";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import api from "../../services/api";

const GroupActivities = () => {
  const [activities, setActivities] = useState();

  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const getGroupActivities = async () => {
    await api
      .get("/activities/", {
        headers: { Authorizantion: `Bearer ${token}` },
      })
      .then((response) => console.log(response));
  };

  useEffect(() => {
    getGroupActivities();
  }, []);

  return (
    <GlobalContainer>
      <h1>activities</h1>
      <GlobalWrap>
        {/* {activities.map((title, index) => (
          <div key={index}>{title}</div>
        ))} */}
      </GlobalWrap>
    </GlobalContainer>
  );
};
export default GroupActivities;
