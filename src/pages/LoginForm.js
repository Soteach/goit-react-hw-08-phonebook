import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import { EnterForm, Name, Input, AddButton } from './RegisterForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const email = elements.email.value;
    const password = elements.password.value;

    const newUser = { email, password };

    dispatch(loginUser(newUser));

    e.currentTarget.reset();
  };

  return (
    <EnterForm onSubmit={submitHandler}>
      <Name>Email:</Name>
      <Input name="email" type="email" autoComplete="on"></Input>
      <Name>Password:</Name>
      <Input name="password" type="password"></Input>
      <AddButton type="submit">Log In </AddButton>
    </EnterForm>
  );
};

export default LoginForm;
