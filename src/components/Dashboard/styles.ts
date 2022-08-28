import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75rem;
  margin: 3rem auto 0;
  gap: 1.5rem;
`;

export const DashboardContent = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 874px) {
    flex-direction: column;
  }
`;

export const GalleryContainer = styled.section`
  display: flex;
  max-height: 544px;
  border-radius: 8px;
  flex: 1;
  flex-wrap: wrap;
  gap: 1rem;
  overflow: auto;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["gray-500"]};
    border-radius: 20px;
  }
`;
