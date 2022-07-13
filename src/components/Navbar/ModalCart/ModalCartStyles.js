import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: var(--gray-bg);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 450px;
  top: 0;
  right: 0;
  z-index: 99;
  border-radius: 0 0 0 1rem;
  padding: 2rem;
`;

export const CloseButtonStyled = styled(motion.button)`
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  margin: 5rem 0 2rem 0;
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: var(--gray-bg);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  border-radius: 15px;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PriceContainerStyled = styled.div`
  margin-top: 5rem;

  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalStyled = styled(SubtotalStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
