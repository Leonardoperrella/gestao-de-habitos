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
import { useParams, useLocation } from "react-router-dom";
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
  const [selectedHabit, setSelectedHabit] = useState({});
  const [inputTitle, setInputTitle] = useState("");
  const [selectDifficulty] = useState(selectedHabit.difficulty);
  const [selecthowMuchAchieved] = useState(selectedHabit.howMuchAchieved);
  console.log(useLocation());
  const {
    state: { group },
  } = useLocation();

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
      setSelectedHabit(response.data);
      setInputTitle(response.data.title);
    });
  }, []);

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    difficulty: yup.string(),
    how_much_achieved: yup.number(),
  });

  const { register, handleSubmit, errors, reset } = useForm({
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
            value={inputTitle}
            setInputValue={setInputTitle}
          >
            title
          </FormUserInput>
          <FormActionSelect
            name="difficulty"
            inputRef={register}
            error={errors.difficulty}
            value={selectDifficulty}
          >
            {difficulty}
          </FormActionSelect>
          <FormActionSelect
            name="how_much_achieved"
            inputRef={register}
            error={errors.how_much_achieved}
            value={selecthowMuchAchieved}
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
