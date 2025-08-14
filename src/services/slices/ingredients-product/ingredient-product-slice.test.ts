import { expect, test, describe } from '@jest/globals';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {ingredientsProductReducer, initialState, IIngredientsState } from './ingredients-product-slice';

import { fetchIngredients } from '../../thunks/ingredients-product';


describe('теста слайса ингредиентов', () => {

        const mockIngredients = [
            {
                _id: 'sauce-1',
                name: 'Соус Spicy-X',
                type: 'sauce',
                proteins: 30,
                fat: 20,
                carbohydrates: 40,
                calories: 30,
                price: 90,
                image: 'test-image.png',
                image_large: 'test-image-large.png',
                image_mobile: 'test-image-mobile.png'
            }, 
            {
                _id: 'ingredient-1',
                name: 'Биокотлета из марсианской Магнолии',
                type: 'main',
                proteins: 420,
                fat: 142,
                carbohydrates: 242,
                calories: 4242,
                price: 424,
                image: 'test-image.png',
                image_large: 'test-image-large.png',
                image_mobile: 'test-image-mobile.png'
            }];

            
        
    interface IngredientsOnlyState {
        ingredientsProduct: IIngredientsState;
    }
              
              // Правильная типизация стореджа
    let store: {
        getState(): IngredientsOnlyState; // возвращается объект с ключом ingredientsProduct
        dispatch(action: any): void;       // пока допускаем любое действие
    };

    beforeEach(() => {
      // Создаем новое хранилище перед каждым тестом
      store = configureStore({
        reducer: {
          ingredientsProduct: ingredientsProductReducer,
        },
      });
    });

    test('test fulfilled', async () => {
        
        jest.spyOn(store, 'dispatch').mockImplementation((action) => {
            if (action.type === 'ingredients/fetch/pending') {
              return action;
            }
            if (action.type === 'ingredients/fetch/fulfilled') {
              return { payload: mockIngredients };
            }
            
          });

          await store.dispatch(fetchIngredients());

          // Получаем финальное состояние и проверяем его
          const finalState = store.getState().ingredientsProduct;
          expect(finalState.items).toEqual(mockIngredients); // Данные подгружены
          expect(finalState.loading).toBe(false); // Завершение загрузки
          expect(finalState.error).toBe(null); // Без ошибок

    })

    test('ошибочная загрузка ингредиентов', async () => {
        
        jest.spyOn(store, 'dispatch').mockImplementation((action) => {
          if (action.type === 'ingredients/fetch/rejected') {
            return { payload: 'Ошибка при загрузке' };
          }
          
        });
    
        await store.dispatch(fetchIngredients());
    
        // Проверяем наличие ошибки
        const finalState = store.getState().ingredientsProduct;
        expect(finalState.items).toEqual([]);
        expect(finalState.loading).toBe(false);
        expect(finalState.error).toBe('Ошибка при загрузке');
      });

      test('процесс загрузки', async () => {
        
        jest.spyOn(store, 'dispatch').mockImplementation((action) => {
            if (action.type === 'ingredients/fetch/pending') {
                return action;
            }
        });
    
        await store.dispatch(fetchIngredients());
    
        const finalState = store.getState().ingredientsProduct;
        expect(finalState.items).toEqual([]);
        expect(finalState.loading).toBe(true);
      });
    
      afterEach(() => {
        // Удаление всех шуток (spies)
        jest.restoreAllMocks();
      });

} )