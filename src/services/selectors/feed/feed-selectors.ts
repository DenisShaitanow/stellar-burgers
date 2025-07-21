import { RootState } from '@store';
import { TOrder } from '@utils-types';

export const selectFeedOrders = (state: RootState): TOrder[] =>
  state.feed.orders;
export const selectFeedLoading = (state: RootState) => state.feed.loading;
export const selectFeedError = (state: RootState) => state.feed.error;
export const selectFeedTotal = (state: RootState) => state.feed.total;
export const selectFeedTotalToday = (state: RootState) => state.feed.totalToday;
