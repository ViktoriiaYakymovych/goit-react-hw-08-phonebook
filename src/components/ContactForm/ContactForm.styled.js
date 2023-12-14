import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;

export const Button = styled.button`
  padding: 4px;
  border: 1px solid black;
  background-color: transparent;
  &:hover,
  &:focus {
    color: green;
  }
`;
