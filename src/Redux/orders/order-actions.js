import { uuidv4 } from '@firebase/util';
import { onSnapshot } from 'firebase/firestore';
import { createOrderDocument, getOrders } from '../../firebase/firebase-utils';
import { store } from '../store';
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
} from './orders-types';

export const createOrderSuccess = orderData => ({
  type: CREATE_ORDER_SUCCESS,
  payload: orderData,
});

export const createOrderFail = error => ({
  type: CREATE_ORDER_FAIL,
  payload: error,
});

export const createOrder = orderData => async dispatch => {
  const {
    user: { currentUser },
  } = store.getState();

  try {
    const orderRef = await createOrderDocument({
      ...orderData,
      orderId: uuidv4(),
      userId: currentUser.id,
    });

    onSnapshot(orderRef, snapShot => {
      dispatch(createOrderSuccess({ id: snapShot.Id, ...snapShot.data() }));
    });
  } catch (error) {
    dispatch(createOrderFail(error));
  }
};

export const getOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const getOrdersStart = () => ({
  type: FETCH_ORDERS_START,
});

export const getOrdersFail = error => ({
  type: FETCH_ORDERS_FAIL,
  payload: error,
});

export const getFullOrders = userId => async dispatch => {
  dispatch(getOrdersStart());
  try {
    const orders = await getOrders(userId);
    console.log('Ordenes: ' + orders);
    dispatch(getOrdersSuccess(orders));
  } catch (error) {
    dispatch(getOrdersFail(error));
  }
};
