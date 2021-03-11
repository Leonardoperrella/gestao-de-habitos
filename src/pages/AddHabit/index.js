import { useState } from "react";
import BackGroundImage from "../../components/BackGroundImage";
import GlobalContainer from "../../components/GlobalContainer";
import Background from "../../Images/BackgroundAddHabit.jpg";
import GlobalWrap from "../../components/GlobalWrap";
import FormUserInput from "../../components/FormUserInput";
import { ButtonSubmit, ButtonIcon } from "../../components/FormUser/style";
import Menu from "../../components/Menu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import * as yup from "yup";

const AddHabit = () => {
  const [habitError, setHabitError] = useState({});
  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    // category: yup.string().required("Field Required"),
    // difficulty: yup.string().required("Field Required"),
    // frequency: yup.string().required("Field Required"),
    // achieved: yup.string().required("Field Required"),
    // how_much_achieved: yup.string().required("Field Required"),
    // user: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    return;
    api
      .post("/habits/", data)
      .then((response) => {
        reset();
      })
      .catch((e) => setHabitError(e.response));
  };

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <form onSubmit={handleSubmit(handleForm)}>
          <FormUserInput
            name="title"
            register={register}
            error={!!errors.title}
            helperText={errors.title?.message}
          >
            Title
          </FormUserInput>
          <ButtonSubmit>
            <ButtonIcon />
          </ButtonSubmit>
        </form>
        <Menu />
      </GlobalWrap>
    </GlobalContainer>
  );
};

export default AddHabit;
