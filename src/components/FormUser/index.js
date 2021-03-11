import {
  FormTitle,
  Input,
  Form,
  ButtonSubmit,
  ButtonIcon,
  LinkRegister,
  LinkSingIn,
  ContainerLink,
} from "./style";

const FormUser = () => {
  return (
    <div>
      <div>
        <div />
        <FormTitle>WE ARE VALORANT</FormTitle>
        <div />
      </div>

      <div>
        <Form>
          <Input
            name="name"
            placeholder="Username"
            variant="outlined"
            id="outlined-basic"
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            variant="outlined"
            id="outlined-basic"
          />
          <Input
            name="email"
            placeholder="Email"
            variant="outlined"
            id="outlined-basic"
          />
        </Form>
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
