import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';
import { pedidos } from '../../data/MisOrdenes';
import { useSelector } from 'react-redux';
import Loader from '../UI/Loader/Loader';

const CardsMisOrdenes = () => {

  const {orders, loading, error} = useSelector(state => state.orders)

  console.log(orders);

  if(loading && !orders.length){
    return <Loader
    styles={{ height: '50px', width: '50px' }}
    />
  }

  if (error) {
    return <h2>{error.message}</h2>
  }

  return (
    <MisOrdenesContainerStyled>
      
      {orders.length ? (
        orders.map(order => <CardMisOrdenes key={order.id} {...order} />)
      ) : (
        <h2>Que esperas para hacer tu primer pedido!</h2>
      )
    }
 
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
