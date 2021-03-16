import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";
import GlobalWrap from "../../components/GlobalWrap";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import FormUserInput from "../../components/FormUserInput";
import Background from "../../Images/BackgroundAddGoal.jpg";
import Menu from "../../components/Menu";
import FormActionSelect from "../../components/FormActionSelect";
import FormAction from "../../components/FormAction";

const AddHabit = () => {
  const [goalError, setGoalError] = useState({});
  const [inputTitle, setInputTitle] = useState("");

  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const difficulty = [
    { value: "Easy", content: "Easy" },
    { value: "Medium", content: "Medium" },
    { value: "Hard", content: "Hard" },
  ];

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    data = { ...data, how_much_achieved: 0, group: 11 };
    api
      .post("/goals/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((e) => setGoalError(e.response));
  };

  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <FormAction handleSubmit={handleSubmit(handleForm)} title="Add Habit">
            <FormUserInput
              name="title"
              inputRef={register}
              error={errors.title}
              setInputValue={setInputTitle}
              value={inputTitle}
            >
              Title
            </FormUserInput>
            <FormActionSelect
              name="difficulty"
              inputRef={register}
              error={errors.difficulty}
            >
              {difficulty}
            </FormActionSelect>
          </FormAction>
        </GlobalWrap>
      </GlobalContainer>
      <Menu />
    </>
  );
};

export default AddHabit;
