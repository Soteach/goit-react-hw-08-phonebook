import { useDispatch, useSelector } from 'react-redux';
import { HeaderBlock, Links, StyledLink, Button } from './Header.styled';
import { logOutUser } from 'redux/auth/authOperations';
import { selectIsLogedIn, selectUserName } from 'redux/auth/authSelectors';

export const Header = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectUserName);

  const isLogedIn = useSelector(selectIsLogedIn);

  return (
    <HeaderBlock>
      <Links>
        <StyledLink to="/">Home</StyledLink>
        {!isLogedIn && (
          <>
            <StyledLink to="/register">Registration</StyledLink>
            <StyledLink to="/login">LogIn</StyledLink>
          </>
        )}
        {isLogedIn && <StyledLink to="/contacts">MyContacts</StyledLink>}
      </Links>

      {isLogedIn && (
        <div>
          <h3>Hello, {username}</h3>
          <Button type="button" onClick={() => dispatch(logOutUser())}>
            Log Out
          </Button>
        </div>
      )}
    </HeaderBlock>
  );
};
