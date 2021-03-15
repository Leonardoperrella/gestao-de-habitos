import {
  FormTitle,
  Square,
  SquareInverse,
  Form,
  ButtonSubmit,
  ButtonIcon,
  LinkRegister,
  LinkSignIn,
  ContainerLink,
} from "./style";
import { COLORS } from "../../style";

const FormUser = ({ children, isRegistering, handleSubmit }) => {
  return (
    <div>
      <div>
        <Square color={COLORS.highlight} />
        <SquareInverse color={COLORS.gray} />
        <FormTitle>WE ARE HABITORANT</FormTitle>
      </div>

      <div>
        <Form onSubmit={handleSubmit}>
          {children}

          <ButtonSubmit>
            <ButtonIcon />
          </ButtonSubmit>
        </Form>
      </div>

      <ContainerLink>
        <LinkRegister>{isRegistering ? "Register" : "Sign in"}</LinkRegister>
        <LinkSignIn>{isRegistering ? "Sign in" : "Register"}</LinkSignIn>
      </ContainerLink>
    </div>
  );
};
export default FormUser;
