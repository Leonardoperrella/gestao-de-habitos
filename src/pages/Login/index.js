import Background from "../../Images/BackgroundLoginRegister.jpg";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import GlobalWrap from "../../components/GlobalWrap";

const Login = () => {
  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap></GlobalWrap>
    </GlobalContainer>
  );
};

export default Login;
