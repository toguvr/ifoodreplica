import axios from 'axios'
import { setOrdersHistory, setProfile, setAddress, removeAmount, setActiveOrder, getOrdersHistory, getProfile, getFullAddress, getActiveOrder, placeOrder } from './'

describe("testando as actions do index", () => {

    const mockObj = { id: 1, name: "obj1" }

    const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/iFuture'

    test("test of setOrdersHistory", () => {
        const expectedSetOrdersHistory = {
            type: 'SET_ORDERS',
            payload: {
                orders: [mockObj]
            }
        }
        const result = setOrdersHistory([mockObj])
        expect(expectedSetOrdersHistory).toMatchObject(result)
    })

    test("test of setProfile", () => {
        const expectedSetOrdersHistory = {
            type: 'SET_PROFILE',
            payload: {
                profile: mockObj
            }
        }
        const result = setProfile(mockObj)
        expect(expectedSetOrdersHistory).toMatchObject(result)
    })

    test("test of setAddress", () => {
        const expectedSetOrdersHistory = {
            type: 'SET_ADDRESS',
            payload: {
                address: mockObj
            }
        }
        const result = setAddress(mockObj)
        expect(expectedSetOrdersHistory).toMatchObject(result)
    })

    test("test of removeAmount", () => {
        const expectedSetOrdersHistory = {
            type: 'REMOVE_AMOUNT',
            payload: {
                idToRemove: mockObj
            }
        }
        const result = removeAmount(mockObj)
        expect(expectedSetOrdersHistory).toMatchObject(result)
    })

    test("test of setActiveOrder", () => {
        const expectedSetOrdersHistory = {
            type: 'SET_ACTIVE_ORDER',
            payload: {
                activeOrder: mockObj
            }
        }
        const result = setActiveOrder(mockObj)
        expect(expectedSetOrdersHistory).toMatchObject(result)
    })

    test("test of getOrdersHistory", async () => {

        axios.get = jest.fn(()=>{
            return {data:{orders:[]}}
        })

        const mockedDispatch = jest.fn()
        await getOrdersHistory()(mockedDispatch)

        expect(axios.get).toHaveBeenCalledWith(`${urlBase}/orders/history`,{
            headers: {
                auth: null
            }
        })
    })

    test("test of getProfile", async () => {

        axios.get = jest.fn(()=>{
            return {data:{user:[]}}
        })

        const mockedDispatch = jest.fn()
        await getProfile()(mockedDispatch)

        expect(axios.get).toHaveBeenCalledWith("https://us-central1-missao-newton.cloudfunctions.net/iFuture/profile",{
            headers: {
                auth: null
            }
        })
    })

    test("test of getFullAddress", async () => {

        axios.get = jest.fn(()=>{
            return {data:{user:[]}}
        })

        const mockedDispatch = jest.fn()
        await getFullAddress()(mockedDispatch)

        expect(axios.get).toHaveBeenCalledWith(`${urlBase}/profile/address`,{
            headers: {
                auth: null
            }
        })
    })

    test("test of getActiveOrder", async () => {

        axios.get = jest.fn(()=>{
            return {data:{order:[]}}
        })

        const mockedDispatch = jest.fn()
        await getActiveOrder()(mockedDispatch)
 
        expect(axios.get).toHaveBeenCalledWith(`${urlBase}/active-order`,{
            headers: {
                auth: null
            }
        })
    })

    test("test of placeOrder", async () => {

        axios.post = jest.fn(()=>{
            return {status: 200}
        })

        const mockedDispatch = jest.fn()

        const expectedBody = {
            products: mockObj,
            paymentMethod: "card"
        }
        
        await placeOrder(mockObj, "card", "1")(mockedDispatch)
 
        expect(axios.post).toHaveBeenCalledWith(`${urlBase}/restaurants/1/order`,expectedBody,{
            headers: {
                auth: null
            }

        
        })
        expect(mockedDispatch).toHaveBeenCalledTimes(1);
    })


})
