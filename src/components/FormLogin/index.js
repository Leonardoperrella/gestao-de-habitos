import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import api from "../../services/api";
import * as yup from "yup";
import jwt_decode from "jwt-decode";

import FormUserInput from "../FormUserInput";
import { Form } from "./style";
import ButtonSubmit from "../ButtonSubmit";

const FormLogin = () => {
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
    console.log("chegou", data);
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
    <Form onSubmit={handleSubmit(handleForm)}>
      <FormUserInput
        type="text"
        error={errors.username}
        name="username"
        inputRef={register}
      >
        Username
      </FormUserInput>

      <FormUserInput
        type="password"
        error={errors.password}
        name="password"
        inputRef={register}
      >
        Password
      </FormUserInput>
      <footer>
        <h2>Sing In</h2>
        <ButtonSubmit type="submit" variant="contained" color="primary">
          Submit
        </ButtonSubmit>
      </footer>
    </Form>
  );
};

export default FormLogin;
