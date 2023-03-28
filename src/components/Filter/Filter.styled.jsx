import styled from 'styled-components';

const Title = styled.p`
  margin: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  min-width: 360px;
`;

const FilterContainer = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  margin-top: 32px;
  border: 1px dashed purple;
  border-radius: 4px;
  padding: 16px;
`;

export { Title, FilterContainer };
