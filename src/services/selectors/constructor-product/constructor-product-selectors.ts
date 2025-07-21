import { RootState } from '@store';
import { TIngredient } from '@utils-types';

export const selectConstructorBun = (state: RootState): TIngredient | null =>
  state.constructorProduct.bun;
export const selectConstructorIngredients = (state: RootState): TIngredient[] =>
  state.constructorProduct.ingredients;
export const selectConstructorState = (state: RootState) =>
  state.constructorProduct;
