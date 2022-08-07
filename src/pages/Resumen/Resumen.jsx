import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardResumen from '../../components/Resumen/CardResumen';
import Link from '../../components/UI/Link/Link';
import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from './ResumenStyles';
import * as ordersActions from '../../Redux/orders/order-actions'
import { formatPrice } from '../../utils/formatPrice';

const Resumen = () => {

  const [visitedOrder, setVisitedOrder] = useState(null);
  const currentUser = useSelector(state => state.user.currentUser);
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  const {orderId} = useParams()
  

  console.log(orderId);

  useEffect(() => {
    if(!orders.length && currentUser?.Id) {
      dispatch(ordersActions.getFullOrders(currentUser?.Id))
    }
    setVisitedOrder(orders.find(order => order.id === orderId));
  }, [orderId, currentUser?.Id, orders, dispatch])

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #{visitedOrder?.id.slice(0, 7)}</h1>
        <Link borderRadius='20' to='/mis-ordenes'></Link>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        {
          visitedOrder?.items.map(item => (
            <CardResumen key={item.id} {...item} />
          ))
        }
        </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(visitedOrder?.price)}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>{formatPrice(visitedOrder?.shippingCost)}</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>{formatPrice(visitedOrder?.total)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;
