import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';
import { pedidos } from '../../data/MisOrdenes';

const CardsMisOrdenes = () => {
  return (
    <MisOrdenesContainerStyled>
      {pedidos.map(pedido => (
        <CardMisOrdenes
          key={pedido.id}
          title={pedido.title}
          imgSource={pedido.img}
          pedido={pedido.pedido}
          price={pedido.price}
          status={pedido.status}
        />
      ))}
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
