import axios from 'axios';
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/iFuture'

export const setOrdersHistory = (orders) => ({
    type: 'SET_ORDERS',
    payload: {
        orders
    }
})

export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    payload: {
        profile
    }
})

export const setAddress = (address) => ({
    type: 'SET_ADDRESS',
    payload: {
        address
    }
})

export const removeAmount = (idToRemove) => ({
    type: 'REMOVE_AMOUNT',
    payload: {
        idToRemove
    }
})

export const setActiveOrder = (activeOrder) => ({
    type: 'SET_ACTIVE_ORDER',
    payload: {
        activeOrder
    }
})

export const getOrdersHistory = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");

    const response = await axios.get(`${urlBase}/orders/history`, {
        headers: {
            auth: token
        }

    })

    dispatch(setOrdersHistory(response.data.orders))
}

export const getProfile = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");

    const response = await axios.get(`${urlBase}/profile`, {
        headers: {
            auth: token
        }

    })
    dispatch(setProfile(response.data.user))
}

export const getFullAddress = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");

    const response = await axios.get(`${urlBase}/profile/address`, {
        headers: {
            auth: token
        }

    })
    dispatch(setAddress(response.data.address))
}

export const getActiveOrder = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");

    const response = await axios.get(`${urlBase}/active-order`, {
        headers: {
            auth: token
        }

    })

    dispatch(setActiveOrder(response.data.order))
}

export const placeOrder = (products, paymentMethod, restaurantId) => async dispatch => {

    const token = window.localStorage.getItem("token");

    const body = {
        products: products,
        paymentMethod: paymentMethod
     }

    const response = await axios.post(
        `${urlBase}/restaurants/${restaurantId}/order`, body,{
            headers:{
                auth: token
            }
        }
    );
    
    dispatch(push(routes.feed));

}