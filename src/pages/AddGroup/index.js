import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";
import GlobalWrap from "../../components/GlobalWrap";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import FormUserInput from "../../components/FormUserInput";
import Background from "../../Images/BackgroundAddGroup.jpg";
import Menu from "../../components/Menu";
import FormAction from "../../components/FormAction";

const AddGroup = () => {
  const [groupError, setGroupError] = useState({});

  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const schema = yup.object().shape({
    name: yup.string().required("Field Required"),
    description: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((e) => setGroupError(e.response));
  };

  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <FormAction handleSubmit={handleSubmit(handleForm)} title="Add Group">
            <FormUserInput name="name" inputRef={register} error={errors.name}>
              Name
            </FormUserInput>
            <FormUserInput
              name="description"
              inputRef={register}
              error={errors.description}
            >
              Description
            </FormUserInput>
            <FormUserInput
              name="category"
              inputRef={register}
              error={errors.category}
            >
              Category
            </FormUserInput>
          </FormAction>
        </GlobalWrap>
      </GlobalContainer>
      <Menu />
    </>
  );
};

export default AddGroup;
