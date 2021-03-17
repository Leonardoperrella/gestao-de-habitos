import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardActivite from "../../components/CardActivite";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import api from "../../services/api";
import { SubTitle } from "./style";

const GroupDetails = () => {
  const state = useParams();

  const [group, setGroup] = useState({});
  const [showGroup, setShowGroup] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getGroupActivities = async () => {
      const response = await api.get(`/groups/${id}/`);
      const group = response.data;

      setGroup(group);
      setShowGroup(true);
    };

    getGroupActivities();
  }, [id]);

  return (
    <GlobalContainer>
      <GlobalWrap>
        {showGroup ? (
          <>
            <h1>{group.name}</h1>

            <SubTitle>Goals</SubTitle>
            {group.goals.map(
              ({ id, title, difficulty, achieved, how_much_achieved }) => (
                <div key={id}>
                  <h1>{title}</h1>
                </div>
              )
            )}

            <SubTitle>Activities</SubTitle>
            {group.activities.map(({ id, title, realization_time }) => (
              <CardActivite key={id} id={id} title={title} />
            ))}
          </>
        ) : (
          "Grupo não encontrado"
        )}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default GroupDetails;
