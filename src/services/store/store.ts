import { configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsProductReducer } from '@slices/ingredients-product/ingredients-product-slice';
import { constructorProductReducer } from '@slices/constructor-product/constructor-product-slice';
import { userReducer } from '@slices/user/user-slice';
import { ordersReducer } from '@slices/orders/orders-slice';
import { feedReducer } from '@slices/feed/feed-slice';

export const rootReducer = combineReducers({
  ingredientsProduct: ingredientsProductReducer,
  constructorProduct: constructorProductReducer,
  user: userReducer,
  orders: ordersReducer,
  feed: feedReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = () => dispatchHook();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
