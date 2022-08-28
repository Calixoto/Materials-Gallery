import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  margin: 0 auto;

  nav {
    display: flex;
    gap: 1.5rem;

    a {
      color: inherit;

      &:hover {
        filter: opacity(0.6);
        transition: all 0.2s linear;
      }
    }
  }
`;
