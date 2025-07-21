import { RootState } from '@store';
import { TOrder } from '@utils-types';

export const selectUserOrders = (state: RootState): TOrder[] =>
  state.orders.userOrders;
export const selectOrderModalData = (state: RootState) =>
  state.orders.orderModalData;
export const selectOrderRequest = (state: RootState) =>
  state.orders.orderRequest;
