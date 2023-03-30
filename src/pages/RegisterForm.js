import { useDispatch } from 'react-redux';
import { createNewUser } from 'redux/auth/authOperations';
import { EnterForm, Name, Input, AddButton } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const name = elements.name.value;
    const email = elements.email.value;
    const password = elements.password.value;

    const newUser = { name, email, password };

    dispatch(createNewUser(newUser));

    e.currentTarget.reset();
  };

  return (
    <EnterForm onSubmit={submitHandler}>
      <Name>Name:</Name>
      <Input name="name" type="text" autoComplete="on"></Input>
      <Name>Email:</Name>
      <Input name="email" type="email" autoComplete="on"></Input>
      <Name>Password:</Name>
      <Input name="password" type="password"></Input>

      <AddButton typeAddButton="submit"> Register me </AddButton>
    </EnterForm>
  );
};

export default RegisterForm;
