import styled from 'styled-components';

const DelBtn = styled.button`
  width: 64px;
  height: 24px;
  text-align: center;
  padding: 4px;
  margin-left: 8px;
  background-color: gold;
  color: #53136d;
  border: none;

  :active {
    box-shadow: 0px 0px 2px #bababa, inset 0px 0px 7px #2b1717;
  }
`;

const List = styled.li`
  max-width: 360px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 10px;
`;

const ContactList = styled.ul`
  width: 420px;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  margin-top: 32px;
  border-radius: 4px;
  padding: 16px;
`;

export { List, DelBtn, ContactList };
