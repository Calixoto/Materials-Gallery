import styled from "styled-components";

export const FormAddMaterialContainer = styled.form`
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
