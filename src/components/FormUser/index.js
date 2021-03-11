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

const FormUser = ({ children }) => {
  return (
    <div>
      <div>
        <SquareRed />
        <FormTitle>WE ARE VALORANT</FormTitle>
        <SquareGrey />
      </div>

      <div>
        <Form> {children} </Form>
      </div>

      <ButtonSubmit>
        <ButtonIcon />
      </ButtonSubmit>

      <ContainerLink>
        <LinkRegister>Register</LinkRegister>
        <LinkSingIn>Sing in</LinkSingIn>
      </ContainerLink>
    </div>
  );
};
export default FormUser;
