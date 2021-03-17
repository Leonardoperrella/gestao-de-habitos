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
import { toast } from "react-toastify";
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

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
    difficulty: yup.string().required("Field Required"),
    frequency: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    api.get(`/habits/${params.id}/`).then((response) => {
      setSelectedHabit(response.data);
      setValue("title", response.data.title);
      console.log(response.data);
    });
  }, []);

  const handleForm = (data) => {
    api
      .patch(`/habits/${params.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response));

    notify();

    //history.push("/home");
  };

  const { title } = selectedHabit;

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit
          handleSubmit={handleSubmit(handleForm)}
          name="Habit"
          id={params.id}
          origin="/habits"
        >
          <FormUserInput
            name="title"
            inputRef={register}
            error={errors.title}
            value={title}
          >
            title
          </FormUserInput>
          <FormActionSelect
            name="category"
            inputRef={register}
            error={errors.category}
            value={selectedHabit.category}
          >
            {category}
          </FormActionSelect>
          <FormActionSelect
            name="difficulty"
            inputRef={register}
            error={errors.difficulty}
            value={selectedHabit.difficulty}
          >
            {difficulty}
          </FormActionSelect>
          <FormActionSelect
            name="frequency"
            inputRef={register}
            error={errors.frequency}
            value={selectedHabit.frequency}
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
