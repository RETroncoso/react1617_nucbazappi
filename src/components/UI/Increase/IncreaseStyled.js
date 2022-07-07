import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const IncreaseStyled = styled(motion.button)`
  background: #47311b;
  border: none;
  border-radius: 15px;
  width: 40px;
  height: 40px;
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background: var(--btn-gradient);
    `}
`;
