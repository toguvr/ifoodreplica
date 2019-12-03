import React from "react";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ContainerEditAddressPage, InputAddress, InputNumber, InputHouse, InputNeighborhood, InputCity, InputState } from './styled';
import { connect } from 'react-redux';
import { signUpAddress } from '../../actions/auth'
import { routes } from "../Router";
import { push } from "connected-react-router";

class EditAddressPage extends React.Component {
    constructor() {
        super();
        this.state = {
            street: "",
            number: "",
            neighbourhood: "",
            city: "",
            state: "",
            complement: ""
        }
    }

    componentDidMount() {
        if (this.props.actualAddress) {
            const { street, state, city, complement, number, neighbourhood } = this.props.actualAddress

            this.setState({
                street: street,
                number: number,
                neighbourhood: neighbourhood,
                city: city,
                state: state,
                complement: complement
            })
        }
    }

    saveAddressChange = () => {
        const { street, state, city, complement, number, neighbourhood } = this.state
        this.props.changeAddress(street, number, neighbourhood, city, state, complement, 'edit/address')
    }

    hendleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        const { street,
            number,
            neighbourhood,
            city,
            state,
            complement, } = this.state

        return (

            <div>
                <Header title={'Endereço'} isArrowBackVisible={true} />

                <ContainerEditAddressPage>

                    <InputAddress
                        required
                        id="outlined-required-name"
                        label="Logradouro"
                        margin="normal"
                        variant="outlined"
                        value={street}
                        onChange={this.hendleInput}
                        name="street"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputNumber
                        required
                        id="outlined-required-email"
                        label="Número"
                        margin="normal"
                        variant="outlined"
                        type="number"
                        value={number}
                        name="number"
                        onChange={this.hendleInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputHouse
                        id="outlined-required-cpf"
                        label="Complemento"
                        margin="normal"
                        variant="outlined"
                        value={complement}
                        name="complement"
                        onChange={this.hendleInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputNeighborhood
                        required
                        id="outlined-required-password"
                        label="Bairro"
                        margin="normal"
                        variant="outlined"
                        value={neighbourhood}
                        name="neighbourhood"
                        onChange={this.hendleInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                    <InputCity
                        required
                        id="outlined-required-confirm"
                        label="Cidade"
                        margin="normal"
                        variant="outlined"
                        value={city}
                        name="city"
                        onChange={this.hendleInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                    <InputState
                        required
                        id="outlined-required-confirm"
                        label="Estado"
                        margin="normal"
                        variant="outlined"
                        value={state}
                        name="state"
                        onChange={this.hendleInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <MainButtonComponent onButtonClick={this.saveAddressChange} title="Salvar" />

                </ContainerEditAddressPage>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    actualAddress: state.requests.actualAddress
})

const mapDispatchToProps = (dispatch) => ({
    changeAddress: (street, number, neighbourhood, city, state, complement, local) => dispatch(signUpAddress(street, number, neighbourhood, city, state, complement, local)),
    goToProfile: () => dispatch(push(routes.profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAddressPage);