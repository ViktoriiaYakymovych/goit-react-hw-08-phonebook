import styled from "styled-components";

export const ListWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
justify-content: center;
align-items: center;
padding: 4px;
border: 1px solid black;
`

export const Button = styled.button`
  padding: 4px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: transparent;
  &:hover,
  &:focus {
    color: orange;
  }
`;