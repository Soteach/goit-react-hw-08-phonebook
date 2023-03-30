import styled from 'styled-components';

const EnterForm = styled.form`
  padding: 16px;
  width: 360px;
  border: 2px dashed gold;
  border-radius: 4px;
  display: flex;

  flex-wrap: wrap;
`;

const Name = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 200%;
  margin-bottom: 8px;
`;

const AddButton = styled.button`
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

export { EnterForm, Name, Input, AddButton };
