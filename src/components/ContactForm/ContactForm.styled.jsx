import styled from 'styled-components';

const FormContainer = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  margin-top: 32px;
  border: 1px dashed gold;
  border-radius: 4px;
  padding: 16px;
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

const Title = styled.p`
  margin-top: 16px;
  margin-bottom: 5px;
  font-size: 18px;
`;

export { AddButton, Title, FormContainer };
