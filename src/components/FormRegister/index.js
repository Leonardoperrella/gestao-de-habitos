import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import api from "../../services/api";
import * as yup from "yup";

const FormRegister = () => {
  const history = useHistory();
  const [registerError, setRegisterError] = useState({});
  const schema = yup.object().shape({
    username: yup.string().required("Field Required"),
    password: yup.string().required("Field Required"),
    email: yup.string().email("Invalid email").required("Field Required"),
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
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            required
            margin="normal"
            variant="outlined"
            label="username"
            name="username"
            size="small"
            inputRef={register}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>
        <div>
          <TextField
            required
            margin="normal"
            variant="outlined"
            label="password"
            name="password"
            type="password"
            size="small"
            color="primary"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <div>
          <TextField
            required
            margin="normal"
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            size="small"
            color="primary"
            inputRef={register}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
