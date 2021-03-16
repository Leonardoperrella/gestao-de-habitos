import BackGroundImage from "../../components/BackGroundImage";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import Background from "../../Images/BackgroundProfile.jpg";
import {
  ProfileIcon,
  ProfileTitle,
  ProfileText,
  ProfileSubTitle,
} from "./style";
import { useState, useEffect } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

const Profile = () => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const [user, setUser] = useState({});

  useEffect(() => {
    const { user_id } = jwt_decode(token);
    api.get(`users/${user_id}/`).then((response) => setUser(response.data));
  });

  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <ProfileTitle>Profile</ProfileTitle>
          <ProfileIcon />
          <ProfileSubTitle>Username</ProfileSubTitle>
          <ProfileText>{user.username}</ProfileText>
          <ProfileSubTitle sub>Email</ProfileSubTitle>
          <ProfileText>{user.email}</ProfileText>
        </GlobalWrap>
      </GlobalContainer>
      <Menu />
    </>
  );
};

export default Profile;
