import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
} from './orders-types';
import { createOrderSuccess } from './orders-utils';

const INITIAL_STATE = {
  orders: [],
  loading: false,
  error: null,
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: createOrderSuccess(state.orders, action.payload),
      };
    case CREATE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    case FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default ordersReducer;
