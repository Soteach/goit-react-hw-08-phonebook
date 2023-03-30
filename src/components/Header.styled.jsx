import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: purple;

  &.active {
    color: gold;
  }
`;

const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;

  height: 100px;
`;

const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;

const Button = styled.button`
  margin-top: 16px;
  background-color: #53136d;
  width: 128px;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
  :active {
    box-shadow: 0px 0px 2px #bababa, inset 0px 0px 7px #2b1717;
  }
`;

export { HeaderBlock, Links, StyledLink, Button };
