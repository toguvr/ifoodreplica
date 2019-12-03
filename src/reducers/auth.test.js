import auth from './auth'

const mockMsg = 'Error'

describe("Auth Reducer", () => {
    test("SET_ERROR_MESSAGE", () => {
        const testAction = {
            type: 'SET_ERROR_MESSAGE',
            payload: {
                message: mockMsg
            }
        };
        const newState = auth(undefined, testAction);
        expect(newState.loginError).toBe(mockMsg);
    })
    test("CLEAR_ERROR_MESSAGE", () => {
        const testAction = {
            type: 'CLEAR_ERROR_MESSAGE',
            payload: {
                message: mockMsg
            }
        };
        const newState = auth(undefined, testAction);
        expect(newState.loginError).toBe(undefined);
    })

})