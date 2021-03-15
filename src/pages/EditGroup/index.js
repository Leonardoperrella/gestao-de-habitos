import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import FormEdit from "../../components/FormEdit";
import FormUserInput from "../../components/FormUserInput";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../Images/BackgroundEditHabit.jpg";

const EditGroup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Field Required"),
    description: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {};

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit handleSubmit={handleSubmit(handleForm)} name="Group">
          <FormUserInput
            name="new name"
            inputRef={register}
            error={errors.name}
          >
            Name
          </FormUserInput>
          <FormUserInput
            name="new description"
            inputRef={register}
            error={errors.description}
          >
            Description
          </FormUserInput>
          <FormUserInput
            name="new category"
            inputRef={register}
            error={errors.category}
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
