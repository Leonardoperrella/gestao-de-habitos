import { FormEditContainer, FormEditTitle, FormEditButton } from "./style";

const FormEdit = ({ children }) => {
  return (
    <>
      <FormEditContainer>
        <FormEditTitle>Edit Habit</FormEditTitle>
        {children}
      </FormEditContainer>
      <FormEditButton>Save edit</FormEditButton>
      <FormEditButton isRemovable>Delete Habit</FormEditButton>
    </>
  );
};

export default FormEdit;
