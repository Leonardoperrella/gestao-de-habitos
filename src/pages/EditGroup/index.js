import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as yup from "yup";
import api from "../../services/api";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import FormEdit from "../../components/FormEdit";
import FormUserInput from "../../components/FormUserInput";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../Images/BackgroundEditHabit.jpg";

const EditGroup = () => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const schema = yup.object().shape({
    name: yup.string().required("Field Required"),
    description: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const params = useParams();
  const [groupError, setGroupError] = useState({});
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputCategory, setInputCategory] = useState("");

  const getGroup = async () => {
    await api
      .get(`/groups/${params.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setInputName(response.data.name);
        setInputDescription(response.data.description);
        setInputCategory(response.data.category);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    getGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForm = (data) => {
    console.log(data);
    data = { ...data, category: `habitorant/${data.category}` };

    api
      .patch(`/groups/${params.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {})
      .catch((e) => setGroupError(e.response));
  };

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit
          handleSubmit={handleSubmit(handleForm)}
          name="Group"
          subscribePath={`/groups/${params.id}/subscribe/`}
        >
          <FormUserInput
            name="name"
            inputRef={register}
            error={errors.name}
            value={inputName}
            setInputValue={setInputName}
          >
            Name
          </FormUserInput>
          <FormUserInput
            name="description"
            inputRef={register}
            error={errors.description}
            value={inputDescription}
            setInputValue={setInputDescription}
          >
            Description
          </FormUserInput>
          <FormUserInput
            name="category"
            inputRef={register}
            error={errors.category}
            value={inputCategory}
            setInputValue={setInputCategory}
          >
            Category
          </FormUserInput>
        </FormEdit>
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default EditGroup;
