import styled from "styled-components";

export const GalleryItemsContainer = styled.div`
  max-width: 295px;
  width: 100%;
  background: ${(props) => props.theme["gray-300"]};
  border-radius: 8px;
  border: none;
  img {
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (max-width: 874px) {
    max-width: 275px;
  }
`;

export const GalleryItemContent = styled.div`
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;

  p {
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.125rem;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  width: fit-content;
  flex-direction: column;
  gap: 0.25rem;
  button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme["gray-700"]};

    &:hover {
      color: ${(props) => props.theme["gray-400"]};
      transition: color 0.2s linear;
    }

    &:last-child {
      color: ${(props) => props.theme["red-500"]};

      &:hover {
        color: ${(props) => props.theme["red-700"]};
      }
    }
  }
`;
