import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
`;

export const PedidoContainerStyled = styled.div`
  background: var(--gray-bg);
  width: 380px;
  border-radius: 15px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export const IdStyled = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const PriceStyled = styled.p`
  font-weight: 800;
  font-size: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

export const StatusStyled = styled.span`
  background-color: red;
  text-align: center;
  position: absolute;
  width: 2rem;
  height: 1rem;
  top: 1rem;
  right: 1rem;
  border-radius: 1rem;
  padding: 0.3rem;
`;

export const CheckStyled = styled(StatusStyled)`
  background: #15be77;
`;

export const PendingStyled = styled(StatusStyled)`
  background: #ffa100;
`;

export const CancelStyled = styled(StatusStyled)`
  background: #ff005c;
`;
