import {
  FormTitle,
  SquareRed,
  SquareGrey,
  Form,
  ButtonSubmit,
  ButtonIcon,
  LinkRegister,
  LinkSingIn,
  ContainerLink,
} from "./style";

const FormUser = ({ children, isRegistering }) => {
  return (
    <div>
      <div>
        <SquareRed />
        <FormTitle>WE ARE HABITORANT</FormTitle>
        <SquareGrey />
      </div>

      <div>
        <Form> {children} </Form>
      </div>

      <ButtonSubmit>
        <ButtonIcon />
      </ButtonSubmit>

      <ContainerLink>
        <LinkRegister>{isRegistering ? "Register" : "Sing in"}</LinkRegister>
        <LinkSingIn>{isRegistering ? "Sing in" : "Register"}</LinkSingIn>
      </ContainerLink>
    </div>
  );
};
export default FormUser;
