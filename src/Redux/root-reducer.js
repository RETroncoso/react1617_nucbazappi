import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart-reducer';
import categoriesReducer from './categories/categories-reducer';
import productsReducer from './products/products-reducer';
import recommendedReducer from './recommended/recommended-reducer';
import userReducer from './user/user-reducer';
import ordersReducer from './orders/orders-reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  recommended: recommendedReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
});

export default persistReducer(persistConfig, rootReducer);
