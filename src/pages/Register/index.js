import Background from "../../Images/BackgroundLoginRegister.jpg";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import GlobalWrap from "../../components/GlobalWrap";
import FormUser from "../../components/FormUser";
import FormUserInput from "../../components/FormUserInput";

const Register = () => {
  return (
    <div>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <FormUser isRegistering></FormUser>
        </GlobalWrap>
      </GlobalContainer>
    </div>
  );
};

export default Register;
