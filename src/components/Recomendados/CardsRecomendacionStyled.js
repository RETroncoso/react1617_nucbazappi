import styled from 'styled-components';

export const CardsContainer = styled.div`
  gap: 20px;
  padding: 1rem;
  display: grid;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  overflow: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }
`;

export const Card = styled.div`
  background: var(--gray-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.7rem;
  border-radius: 15px;
  gap: 1rem;
`;

export const CardImg = styled.img`
  width: 100px;
`;

export const CardText = styled.div`
  width: 220px;
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  margin: 0;
`;

export const InfoCard = styled.p`
  color: #666;
  font-size: 1.2rem;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 2rem;
  background: linear-gradient(83deg, #ffa100, #fb103d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
