import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardActivite from "../../components/CardActivite";
import CardGoals from "../../components/CardGoals";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import api from "../../services/api";

import { ButtonTopic, ContainerShow, SetaDrop } from "./style";

import { ReactComponent as SetaSvg } from "../../svgs/seta-suspensa.svg";

const GroupDetails = () => {
  const [group, setGroup] = useState({});
  const [showGroup, setShowGroup] = useState(false);
  const [showGoals, setShowGoals] = useState(true);
  const [showActivies, setShowActivies] = useState(true);

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

  const handleShowGoals = () => {
    setShowGoals(!showGoals);
  };

  const handleShowActivies = () => {
    console.log("oi");
    setShowActivies(!showActivies);
  };

  return (
    <GlobalContainer>
      <GlobalWrap>
        {showGroup ? (
          <>
            <h1>{group.name}</h1>

            <ButtonTopic onClick={handleShowGoals} showItem={showGoals}>
              Goals
              <SetaSvg />
            </ButtonTopic>
            {showGoals && (
              <ContainerShow>
                {group.goals.map(
                  ({ id, title, difficulty, achieved, how_much_achieved }) => (
                    <CardGoals
                      key={id}
                      title={title}
                      difficulty={difficulty}
                      how_much_achieved={how_much_achieved}
                      achieved={achieved}
                    />
                  )
                )}
              </ContainerShow>
            )}

            <ButtonTopic onClick={handleShowActivies} showItem={showActivies}>
              Activities
              <SetaSvg />
            </ButtonTopic>
            {showActivies && (
              <ContainerShow>
                {group.activities.map(({ id, title, realization_time }) => (
                  <CardActivite key={id} id={id} title={title} />
                ))}
              </ContainerShow>
            )}
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
