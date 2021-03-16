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
import { useState, useEffect } from "react";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../Images/BackgroundEditHabit.jpg";
import { useHistory, useParams } from "react-router-dom";
import { useHabits } from "../../providers/Habits";

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

const EditHabit = () => {
  const params = useParams();

  const [habits] = useState(() => {
    const getHabits = localStorage.getItem("habits") || "";
    return JSON.parse(getHabits);
  });

  const selectedHabit =
    habits.filter(({ id }) => id === Number(params.id))[0] || "";

  console.log(selectedHabit);
  console.log(params);
  console.log(habits);
  const [inputValue, setInputValue] = useState(selectedHabit.title);

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

  markSelectedOptions(selectedHabit);

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    category: yup.string(),
    difficulty: yup.string(),
    frequency: yup.string(),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit handleSubmit={handleSubmit(handleForm)} name="Habit">
          <FormUserInput
            name="title"
            inputRef={register}
            error={errors.title}
            value={inputValue}
            setInputValue={setInputValue}
          ></FormUserInput>
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
