import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  background-color: skyblue;

  &:hover {
    background-color: red;
  }
`;
