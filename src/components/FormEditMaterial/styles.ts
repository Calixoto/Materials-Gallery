import styled from "styled-components";

export const FormEditMaterialContainer = styled.form`
  width: 100%;
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    display: flex;
    background: 0;
    padding: 0.2rem;
    border: 1px solid ${(props) => props.theme["green-700"]};
    border-radius: 100%;
    margin: 0 auto;
    color: ${(props) => props.theme["green-300"]};

    &:hover {
      border-color: ${(props) => props.theme["green-300"]};
      color: ${(props) => props.theme["green-700"]};

      transition: all 0.2s linear;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme["gray-900"]};

  input {
    background: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-300"]};
    font-size: 1.125rem;
    font-weight: 300;
    border: 1px solid ${(props) => props.theme["gray-100"]};
    padding: 0.5rem 1rem;
    border-radius: 12px;

    &::placeholder {
      color: ${(props) => props.theme["gray-400"]};
    }
  }
`;
