import {
  FormTitle,
  Square,
  SquareInverse,
  Form,
  ButtonSubmit,
  ButtonIcon,
  LabelSignInRegiter,
  LinkSignInRegiter,
  ContainerLink,
} from "./style";
import { COLORS } from "../../style";
import { useHistory } from "react-router-dom";

const FormUser = ({ children, isRegistering, handleSubmit }) => {
  const history = useHistory();

  const handleClick = (isRegistering) => {
    if (isRegistering) {
      history.push("/");
    } else {
      history.push("/register");
    }
  };

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
        <LabelSignInRegiter>
          {isRegistering ? "Register" : "Sign in"}
        </LabelSignInRegiter>
        <LinkSignInRegiter onClick={() => handleClick(isRegistering)}>
          {isRegistering ? "Sign in" : "Register"}
        </LinkSignInRegiter>
      </ContainerLink>
    </div>
  );
};
export default FormUser;
