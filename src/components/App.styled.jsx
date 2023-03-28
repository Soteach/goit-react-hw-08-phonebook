import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 64px;
  margin-left: 64px;
  font-size: 18px;
  color: #010101;
`;

const AppTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-left: 64px;
  margin-top: 36px;
`;

const Header = styled.h1`
  margin-left: 64px;
`;

const Loader = styled.b`
  position: absolute;
  transform: translate(64px, -64px);
`;

export { Wrapper, AppTitle, Header, Loader };
