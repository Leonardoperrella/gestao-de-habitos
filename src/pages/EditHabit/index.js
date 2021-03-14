import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import FormEdit from "../../components/FormEdit";
import FormUserInput from "../../components/FormUserInput";
import FormActionSelect from "../../components/FormActionSelect";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useState } from "react";

const muckupDATA = {
  title: "Correr com personagem",
  category: "Mechanical",
  difficulty: "Hard",
  frequency: "Weekend",
  achieved: false,
  how_much_achieved: 30,
  user: 10,
};

let category = [
  { value: "Aim", content: "Aim" },
  { value: "Mechanical", content: "Mechanical" },
  { value: "Decision Making", content: "Decision Making" },
  { value: "Game Sense", content: "Game Sense" },
];
let difficulty = [
  { value: "Easy", content: "Easy" },
  { value: "Medium", content: "Medium" },
  { value: "Hard", content: "Hard" },
];

let frequency = [
  { value: "Daily", content: "Daily" },
  { value: "Weekly", content: "Weekly" },
  { value: "Weekend", content: "Weekend" },
];

const markSelectedOptions = (data) => {
  category.map((option) => {
    if (option.value === data.category) {
      option.selected = true;
    }
  });
  difficulty.map((option) => {
    if (option.value === data.difficulty) {
      option.selected = true;
    }
  });
  frequency.map((option) => {
    if (option.value === data.frequency) {
      option.selected = true;
    }
  });
};

markSelectedOptions(muckupDATA);

const EditHabit = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
    difficulty: yup.string().required("Field Required"),
    frequency: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {};

  return (
    <GlobalContainer>
      <GlobalWrap>
        <FormEdit handleSubmit={handleSubmit(handleForm)}>
          <FormUserInput name="title" inputRef={register} error={errors.title}>
            {muckupDATA.title}
          </FormUserInput>
          <FormActionSelect
            name="new category"
            inputRef={register}
            error={errors.category}
          >
            {category}
          </FormActionSelect>
          <FormActionSelect
            name="new difficulty"
            inputRef={register}
            error={errors.difficulty}
          >
            {difficulty}
          </FormActionSelect>
          <FormActionSelect
            name="new frequency"
            inputRef={register}
            error={errors.frequency}
          >
            {frequency}
          </FormActionSelect>
        </FormEdit>
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default EditHabit;
