import styled from 'styled-components';

const Header = styled.h1`
  color: purple;
`;

const Loader = styled.b`
  position: absolute;
  transform: translate(210px, -31px);
`;

const Title = styled.p`
  margin-left: 64px;
  font-weight: 700;
`;

export { Loader, Title, Header };
