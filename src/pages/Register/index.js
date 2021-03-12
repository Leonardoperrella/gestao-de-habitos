import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";

import Background from "../../Images/BackgroundLoginRegister.jpg";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import GlobalWrap from "../../components/GlobalWrap";
import FormUser from "../../components/FormUser";
import FormUserInput from "../../components/FormUserInput";

const Register = () => {
  const history = useHistory();
  const [registerError, setRegisterError] = useState({});
  const schema = yup.object().shape({
    username: yup.string().required("Field Required"),
    email: yup.string().email("Invalid email").required("Field Required"),
    password: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/users/", data)
      .then((response) => {
        reset();
        history.push("/");
      })
      .catch((e) => setRegisterError(e.response));
  };
  return (
    <div>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <FormUser isRegistering handleSubmit={handleSubmit(handleForm)}>
            <FormUserInput
              name="username"
              inputRef={register}
              error={errors.username}
            >
              Username
            </FormUserInput>
            <FormUserInput
              name="email"
              inputRef={register}
              error={errors.email}
            >
              Email
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
    </div>
  );
};

export default Register;
