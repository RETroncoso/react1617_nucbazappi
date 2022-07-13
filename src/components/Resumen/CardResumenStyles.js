import styled from 'styled-components';

export const ProductStyled = styled.div`
  background: var(--gray-bg);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 15px;
  padding: 2rem;
  max-width: 80%;
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  color: transparent;
`;
