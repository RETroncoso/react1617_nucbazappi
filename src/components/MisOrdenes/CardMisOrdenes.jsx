import { AiOutlineCheck } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import {
  CancelStyled,
  CheckStyled,
  IdStyled,
  PedidoContainerStyled,
  PendingStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardMisOrdenesStyles';

const CardMisOrdenes = ({ title, price, pedido, status }) => {
  return (
    <PedidoContainerStyled>
      <TextContainerStyled>
        <TitleStyled>{title}</TitleStyled>
        <IdStyled>Fecha {pedido}</IdStyled>
        <PriceStyled>${price}</PriceStyled>
      </TextContainerStyled>
      {status === 'check' && (
        <CheckStyled>
          <AiOutlineCheck />
        </CheckStyled>
      )}
      {status === 'pending' && (
        <PendingStyled>
          <BiTime />
        </PendingStyled>
      )}
      {status === 'cancel' && (
        <CancelStyled>
          <MdOutlineCancel />
        </CancelStyled>
      )}
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;
