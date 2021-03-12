import {
  FormTitle,
  Square,
  SquareInverse,
  Form,
  ButtonSubmit,
  ButtonIcon,
  LinkRegister,
  LinkSingIn,
  ContainerLink,
} from "./style";
import { COLORS } from "../../style";

const FormUser = ({ children, isRegistering }) => {
  return (
    <div>
      <div>
        <Square color={COLORS.highlight} />
        <SquareInverse color={COLORS.gray} />
        <FormTitle>WE ARE HABITORANT</FormTitle>
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
