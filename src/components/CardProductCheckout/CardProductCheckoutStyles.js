import styled from 'styled-components';

export const CheckoutContainerStyled = styled.div`
  background: var(--gray-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  max-width: 80%;
  padding: 1.5rem;
  height: 100px;
  margin-top: 25px;
`;

export const CheckoutProductInfoStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const CheckoutInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
