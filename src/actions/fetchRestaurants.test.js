import axios from 'axios';
import {
  getRestaurants,
  setProductAmount,
  fecthRestaurants,
  setRestaurant,
  setSelectedRestaurantDetails
} from './fetchRestaurants';

describe('Test actions fetchRestaurants', () => {
  const mockObj = { id: 1, name: 'obj1' };

  const urlBase =
    'https://us-central1-missao-newton.cloudfunctions.net/iFuture';

  test.skip('test of getRestaurants', () => {
    const expectedGetRestaurants = {
      type: 'GET_PLACES',
      payload: {
        restaurants: [mockObj]
      }
    };
    const result = getRestaurants([mockObj]);
    expect(expectedGetRestaurants).toMatchObject(result);
  });

  test.skip('test of setProductAmount', () => {
    const expectedSetProductAmount = {
      type: 'SET_PRODUCT_AMOUNT',
      payload: {
        amount: mockObj
      }
    };
    const result = setProductAmount(mockObj);
    expect(expectedSetProductAmount).toMatchObject(result);
  });

  test.skip('test of setRestaurant', () => {
    const expectedSetRestaurant = {
      type: 'SELECTED_RESTAURANT',
      payload: {
        data: [mockObj]
      }
    };
    const result = setRestaurant(mockObj);
    expect(expectedSetRestaurant).toMatchObject(result);
  });
});
