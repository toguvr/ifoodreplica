import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import requests from './requests';
import auth from './auth';
import restaurants from './restaurants';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    requests,
    restaurants,
  });
