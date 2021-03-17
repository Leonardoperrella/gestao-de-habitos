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
import { ToastContainer, toast } from "react-toastify";
import Notification from "../../components/Notification";
import "react-toastify/dist/ReactToastify.css";

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

toast.configure();

const EditHabit = () => {
  const params = useParams();
  const history = useHistory();

  const [selectedHabit, setSelectedHabit] = useState({});

  const [inputTitle, setInputTitle] = useState("");
  const [selectCategory] = useState(selectedHabit.category);
  const [selectDifficulty] = useState(selectedHabit.difficulty);
  const [selectFrequency] = useState(selectedHabit.frequency);

  const notify = () =>
    toast("Salvo com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  useEffect(() => {
    api.get(`/habits/${params.id}/`).then((response) => {
      setSelectedHabit(response.data);
      setInputTitle(response.data.title);
    });
  }, []);

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
    api
      .patch(`/habits/${params.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response));

    notify();

    //history.push("/home");
  };

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit
          handleSubmit={handleSubmit(handleForm)}
          name="Habit"
          deletePath={`habits/${params.id}/`}
          id={params.id}
          origin="/habits"
        >
          <FormUserInput
            name="title"
            inputRef={register}
            error={errors.title}
            value={inputTitle}
            setInputValue={setInputTitle}
          >
            title
          </FormUserInput>
          <FormActionSelect
            name="category"
            inputRef={register}
            error={errors.category}
            value={selectCategory}
          >
            {category}
          </FormActionSelect>
          <FormActionSelect
            name="difficulty"
            inputRef={register}
            error={errors.difficulty}
            value={selectDifficulty}
          >
            {difficulty}
          </FormActionSelect>
          <FormActionSelect
            name="frequency"
            inputRef={register}
            error={errors.frequency}
            value={selectFrequency}
          >
            {frequency}
          </FormActionSelect>
        </FormEdit>
        <Notification
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className=".Toastify__progress-bar--dark .Toastify__toast--dark"
        >
          TESTE
        </Notification>
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default EditHabit;
