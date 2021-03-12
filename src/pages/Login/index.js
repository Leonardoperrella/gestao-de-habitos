import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import Background from "../../Images/BackgroundLoginRegister.jpg";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import GlobalWrap from "../../components/GlobalWrap";
import FormUser from "../../components/FormUser";
import FormUserInput from "../../components/FormUserInput";

const Login = () => {
  const history = useHistory();

  const [loginError, setLoginError] = useState({});

  const schema = yup.object().shape({
    username: yup.string().required("Field Required"),
    password: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { user_id } = jwt_decode(response.data.access);
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
        localStorage.setItem("user_id", JSON.stringify(user_id));
        reset();
        history.push("/home");
      })
      .catch((e) => setLoginError(e.response));
  };
  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormUser isRegistering={false} handleSubmit={handleSubmit(handleForm)}>
          <FormUserInput
            name="username"
            inputRef={register}
            error={errors.username}
          >
            Username
          </FormUserInput>
          <FormUserInput
            name="password"
            inputRef={register}
            error={errors.password}
          >
            Password
          </FormUserInput>
        </FormUser>
      </GlobalWrap>
    </GlobalContainer>
  );
};

export default Login;
