import axios from 'axios';
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';

const getRestaurants = restaurants => ({
  type: 'GET_PLACES',
  payload: {
    restaurants
  }
});


export const setProductAmount = (amount) => ({
  type: 'SET_PRODUCT_AMOUNT',
  payload: {
      amount
  }
})

export const fecthRestaurants = () => async dispatch => {
  const token = window.localStorage.getItem('token');

  const response = await axios.get(
    'https://us-central1-missao-newton.cloudfunctions.net/iFuture/restaurants',
    {
      headers: {
        auth: token
      }
    }
  );
  dispatch(getRestaurants(response.data.restaurants));
};

export const setRestaurant = data => ({
  type: 'SELECTED_RESTAURANT',
  payload: {
    data
  }
});

export const setSelectedRestaurantDetails = restaurantId => async dispatch => {
  const token = window.localStorage.getItem('token');
  const response = await axios.get(
    `https://us-central1-missao-newton.cloudfunctions.net/iFuture/restaurants/${restaurantId}`,
    {
      headers: {
        auth: token
      }
    }
  );
  dispatch(setRestaurant(response.data.restaurant));
  dispatch(push(routes.detail));
};
