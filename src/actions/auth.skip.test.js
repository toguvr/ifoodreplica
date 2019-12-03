import axios from 'axios';
import { setErrorMessageAction, clearErrorMessageAction, login, signUp, signUpAddress, updateProfile} from './auth'

describe("testando as actions do auth", () => {

    const mockObj = { id: 1, name: "obj1" }

    const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/iFuture'

    test("test of setErrorMessageAction", () => {
        const expectedSetErrorMessageAction = {
            type: 'SET_ERROR_MESSAGE',
            payload: {
                message
            }
        }
        const result = setErrorMessageAction()
        expect(expectedSetErrorMessageAction).toMatchObject(result)
    })


    test("test of clearErrorMessageAction", () => {
        const expectedClearErrorMessageAction = {
            type: 'CLEAR_ERROR_MESSAGE',
        }
        const result = clearErrorMessageAction()
        expect(expectedClearErrorMessageAction).toMatchObject(result)
    })


    test("test of login", async () => {

        axios.post = jest.fn(()=>{
            return {status: 200}
        })

        const mockedDispatch = jest.fn()

        const expectedBody = {
            email: "",
            password:  "",
        }
        
        await login(email, password)(mockedDispatch)
 
        expect(axios.post).toHaveBeenCalledWith(`${urlBase}/login`,expectedBody,{
            headers: {
                auth: null
            }
        })
        expect(mockedDispatch).toHaveBeenCalledTimes(1);
    })

    test("test of signUp", async () => {

        axios.post = jest.fn(()=>{
            return {status: 200}
        })

        const mockedDispatch = jest.fn()

        const expectedBody = {
            name: "",
            email:  "",
            cpf: "",
            password: "",
        }
        
        await signUp(name, email, cpf, password)
 
        expect(axios.post).toHaveBeenCalledWith(`${urlBase}/signUp`,expectedBody,{
            headers: {
                auth: null
            }
        })
        expect(mockedDispatch).toHaveBeenCalledTimes(1);
    })

    test("test of signUpAddress", async () => {

        axios.post = jest.fn(()=>{
            return {status: 200}
        })

        const mockedDispatch = jest.fn()

        const expectedBody = {
            street: "",
            number:  "",
            neighbourhood: "",
            city: "",
            state: "",
            complement:  "",
            local: "",
        }
        
        await signUpAddress(street, number, neighbourhood, city, state, complement, local)
 
        expect(axios.put).toHaveBeenCalledWith(`${urlBase}/address`,expectedBody,{
            headers: {
                auth: null
            }
        })
        expect(mockedDispatch).toHaveBeenCalledTimes(1);
    })

    test("test of updateProfile", async () => {

        axios.post = jest.fn(()=>{
            return {status: 200}
        })

        const mockedDispatch = jest.fn()

        const expectedBody = {
            street: "",
            number:  "",
            neighbourhood: "",
            city: "",
            state: "",
            complement:  "",
            local: "",
        }
        
        await updateProfile(street, number, neighbourhood, city, state, complement, local)
 
        expect(axios.put).toHaveBeenCalledWith(`${urlBase}/profile`,expectedBody,{
            headers: {
                auth: null
            }
        })
        expect(mockedDispatch).toHaveBeenCalledTimes(1);
    })
})

