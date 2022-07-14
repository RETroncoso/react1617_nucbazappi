import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from './categories/categories-reducer';
import productsReducer from './products/products-reducer';
import recommendedReducer from './recommended/recommended-reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  recommended: recommendedReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);
