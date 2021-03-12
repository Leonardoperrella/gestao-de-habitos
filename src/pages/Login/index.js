import Background from "../../Images/BackgroundLoginRegister.jpg";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import GlobalWrap from "../../components/GlobalWrap";
import FormLogin from "../../components/FormLogin";
import { FooterLogin } from "./style";

const Login = () => {
  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <h1>WE ARE HABITORANT</h1>
        <FormLogin />
        <FooterLogin>
          <button>Register</button>
          <button>Forgot Password</button>
        </FooterLogin>
      </GlobalWrap>
    </GlobalContainer>
  );
};

export default Login;
