import restaurants from './restaurants'

const mockMsg = 'Error'
const mockArr = [{ id: 1, amount:1, name: "ola", description: "oi sou uma desc", price: 5 }, { id: 2, name: "ola2", description: "oi sou uma desc2", price: 8 }]

describe("Auth Reducer", () => {
    test("GET_PLACES", () => {
        const testAction = {
            type: 'GET_PLACES',
            payload: {
                restaurants: mockArr
            }
        };
        const newState = restaurants(undefined, testAction);
        expect(newState.allRestaurants).toHaveLength(2);
    })

    test.skip("REMOVE_AMOUNT", () => {
        const testAction = {
            type: 'REMOVE_AMOUNT',
            payload: {
                idToRemove: 1
            }
        };
        const newState = restaurants(undefined, testAction);
        expect(newState.selectedProductList).toHaveLength(0);
        expect(newState.selectedProductList[0].amount).toBe(0);
    })

    test.skip("SET_PRODUCT_AMOUNT", () => {
        const testAction = {
            type: 'SET_PRODUCT_AMOUNT',
            payload: {
                idToRemove: [{itemId:1, amount: 2}]
            }
        };
        const newState = restaurants(undefined, testAction);
        expect(newState.selectedProductList).toHaveLength(0);
        expect(newState.selectedProductList[0].amount).toBe(0);
    })
})