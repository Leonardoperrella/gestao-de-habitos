import { LoginContainer, LoginImage, LoginWrap } from "./style";
import Background from "../../Images/BackgroundLoginRegister.jpg";

const Login = () => {
  return (
    <LoginContainer>
      <LoginImage image={Background} />
      <LoginWrap></LoginWrap>
    </LoginContainer>
  );
};

export default Login;
