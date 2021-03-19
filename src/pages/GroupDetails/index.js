import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import api from "../../services/api";

import GroupGoals from "../GroupGoals";
import GroupActivities from "../GroupActivities";

import { AddIcon, ButtonTopic, ContainerShow } from "./style";

import { ReactComponent as SetaSvg } from "../../svgs/seta-suspensa.svg";
import BackGroundImage from "../../components/BackGroundImage";

import Background from "../../Images/BackgrounGroupDetails.jpg";

const GroupDetails = () => {
  const [group, setGroup] = useState({});
  const [showGroup, setShowGroup] = useState(false);
  const [showGoals, setShowGoals] = useState(true);
  const [showActivies, setShowActivies] = useState(true);

  const { id } = useParams();
  const history = useHistory();

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
    setShowActivies(!showActivies);
  };

  const handleNavigation = (path, id) => {
    console.log("entrou");
    history.push(path, { group: id });
  };

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />

      <GlobalWrap>
        {showGroup ? (
          <>
            <h1>{group.name}</h1>

            <ButtonTopic onClick={handleShowGoals} showItem={showGoals}>
              Goals
              <SetaSvg />
            </ButtonTopic>
            <AddIcon onClick={() => handleNavigation("/add-goal", id)} />
            {showGoals && (
              <ContainerShow>
                <GroupGoals />
              </ContainerShow>
            )}

            <ButtonTopic onClick={handleShowActivies} showItem={showActivies}>
              Activities
              <SetaSvg />
            </ButtonTopic>
            <AddIcon onClick={() => handleNavigation("/add-activite", id)} />
            {showActivies && (
              <ContainerShow>
                <GroupActivities />
              </ContainerShow>
            )}
          </>
        ) : (
          "Você não esta inscrito em nenhum grupo"
        )}
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default GroupDetails;
