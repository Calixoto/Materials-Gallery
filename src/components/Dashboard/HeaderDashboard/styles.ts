import styled from "styled-components";

export const HeaderDashboardContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  margin: 0 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme["gray-600"]};

  h2 {
    color: ${(props) => props.theme["gray-300"]};
    font-size: 2rem;
  }

  button {
    display: flex;
    border: 0;
    background: 0;
    color: ${(props) => props.theme["gray-100"]};

    &:hover {
      color: ${(props) => props.theme["gray-300"]};
      filter: brightness(0.95);

      transition: all 0.2s linear;
    }
  }
`;
