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
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import "react-toastify/dist/ReactToastify.css";

let difficulty = [
  { value: "Easy", content: "Easy" },
  { value: "Medium", content: "Medium" },
  { value: "Hard", content: "Hard" },
];

let howMuchAchieved = [
  { value: 25, content: "25%" },
  { value: 50, content: "50%" },
  { value: 75, content: "75%" },
  { value: 100, content: "100%" },
];

toast.configure();

const EditHabit = () => {
  const params = useParams();
  const [goalError, setGoalError] = useState({});
  const [selectedGoal, setSelectedGoal] = useState({});
  const [group, setGroup] = useState("");

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
    api.get(`/goals/${params.id}/`).then((response) => {
      setSelectedGoal(response.data);
      setValue("title", response.data.title);
      setGroup(response.data.group);
    });
  }, []);

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    difficulty: yup.string(),
    how_much_achieved: yup.number(),
  });

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    data = { ...data, group: group };
    api
      .patch(`/goals/${params.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((e) => setGoalError(e.response));

    notify();
  };

  const { title } = selectedGoal;

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit
          handleSubmit={handleSubmit(handleForm)}
          name="Goal"
          id={params.id}
          deletePath={`/goals/${params.id}/`}
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
            name="difficulty"
            inputRef={register}
            error={errors.difficulty}
            value={selectedGoal.difficulty}
          >
            {difficulty}
          </FormActionSelect>
          <FormActionSelect
            name="how_much_achieved"
            inputRef={register}
            error={errors.how_much_achieved}
            value={selectedGoal.how_much_achieved}
          >
            {howMuchAchieved}
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
