import styled from "styled-components";

export const GalleryFilterContainer = styled.aside`
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  gap: 1rem;
  background: ${(props) => props.theme["gray-600"]};

  @media (max-width: 874px) {
    align-items: center;
    margin: 0 auto;
  }

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const GalleryFormFilter = styled.form`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme["gray-700"]};
    font-size: 1.25rem;
    font-weight: 500;
  }

  select {
    background: ${(props) => props.theme["gray-100"]};
    padding: 0.25rem;
    font-size: 1rem;
    line-height: 1;
    border: 0;
    border-radius: 8px;
    /* -webkit-appearance: none; */
  }
`;

export const SearchFormByDescription = styled.form`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  width: fit-content;

  @media (min-width: 874px) {
    input {
      max-width: 200px;
      width: 100%;
    }
  }

  input {
    background: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-300"]};
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid ${(props) => props.theme["gray-500"]};
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    border-radius: 12px;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 6px;
    background: 0;
    border: 0;
    color: ${(props) => props.theme["gray-100"]};

    &:hover {
      color: ${(props) => props.theme.white};
      transition: color 0.2s linear;
    }
  }
`;
