import Background from "../../Images/BackgroundLoginRegister.jpg";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import GlobalWrap from "../../components/GlobalWrap";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormLogin />
      </GlobalWrap>
    </GlobalContainer>
  );
};

export default Login;
