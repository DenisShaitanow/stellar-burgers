import { expect, test, describe } from '@jest/globals';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {constructorProductReducer} from './constructor-product-slice';

import {
    addIngredient,
    removeIngredient,
    moveIngredient,
    clearConstructor
  } from './constructor-product-slice';
import { rootReducer } from '@store';


  describe('constructor-product-slice', () =>{

     const red = combineReducers({
        constructorProduct: constructorProductReducer,
      });

    const store = configureStore({
        reducer: red
    })

    test()

  })