import { FormEditContainer, FormEditTitle, FormEditButton } from "./style";

const FormEdit = ({ children, handleSubmit }) => {
  return (
    <>
      <FormEditContainer onSubmit={handleSubmit}>
        <FormEditTitle>Edit Habit</FormEditTitle>
        {children}
        <FormEditButton>Save edit</FormEditButton>
        <FormEditButton isRemovable>Delete Habit</FormEditButton>
      </FormEditContainer>
    </>
  );
};

export default FormEdit;
