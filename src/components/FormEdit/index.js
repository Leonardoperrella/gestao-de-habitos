import { FormEditContainer, FormEditTitle, FormEditButton } from "./style";

const FormEdit = ({ children, handleSubmit, name }) => {
  return (
    <>
      <FormEditContainer onSubmit={handleSubmit}>
        <FormEditTitle>Edit {name}</FormEditTitle>
        {children}
        <FormEditButton>Save edit</FormEditButton>
        <FormEditButton isRemovable> Delete {name}</FormEditButton>
      </FormEditContainer>
    </>
  );
};

export default FormEdit;
