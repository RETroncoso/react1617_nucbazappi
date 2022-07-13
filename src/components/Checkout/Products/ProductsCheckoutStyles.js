import styled from 'styled-components';

export const CheckoutContainerProductosStyled = styled.div`
  width: 40%;
`;

export const CheckoutContainerPriceStyled = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckoutSubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutEnvioStyled = styled(CheckoutSubtotalStyled)``;

export const CheckoutTotalStyled = styled(CheckoutSubtotalStyled)``;

export const CheckoutPriceTotalStyled = styled.span`
  color: #ff7a00;
  font-weight: 800;
  font-size: 1.3rem;
`;

export const CheckoutHrStyled = styled.hr`
  margin: 4rem 0;
`;
