import requests from './requests'

const mockArr = [{ id: 1, name: "ola", description: "oi sou uma desc", price: 5 }, { id: 2, name: "ola2", description: "oi sou uma desc2", price: 8 }]

describe("Requests Reducer", () => {
    test("SET_ORDERS", () => {
        const testAction = {
            type: 'SET_ORDERS',
            payload: {
                orders: mockArr
            }
        };
        const newState = requests(undefined, testAction);
        expect(newState.allOrders).toHaveLength(2);
        expect(newState.allOrders[0].name).toBe("ola");
    })
    test("SET_PROFILE", () => {
        const testAction = {
            type: 'SET_PROFILE',
            payload: {
                profile: mockArr
            }
        };
        const newState = requests(undefined, testAction);
        expect(newState.actualProfile).toHaveLength(2);
        expect(newState.actualProfile[0].name).toBe("ola");
    })
    test("SET_ADDRESS", () => {
        const testAction = {
            type: 'SET_ADDRESS',
            payload: {
                address: mockArr
            }
        };
        const newState = requests(undefined, testAction);
        expect(newState.actualAddress).toHaveLength(2);
        expect(newState.actualAddress[0].name).toBe("ola");
    })
    test("SET_ACTIVE_ORDER", () => {
        const testAction = {
            type: 'SET_ACTIVE_ORDER',
            payload: {
                activeOrder: mockArr
            }
        };
        const newState = requests(undefined, testAction);
        expect(newState.actualOrder).toHaveLength(2);
        expect(newState.actualOrder[0].name).toBe("ola");
    })

})