import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { signUpAddress } from "../../actions/auth"
import { getProfile } from "../../actions/"
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ContainerAddressPage, TextRegister, InputAddress, InputNumber, InputHouse, InputNeighborhood, InputCity, InputState} from './styled';

class AddressPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            street: "",
            number: "",
            neighbourhood: "",
            city: "",
            state: "",
            complement: ""
        }
    }

    componentDidMount(){
        this.props.getProfile()
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { street, number, neighbourhood, city, state, complement } = this.state

        this.props.createdAddress(street, number, neighbourhood, city, state, complement, 'address')
    }

    clearNewTaskValue = () => {
        this.setState({ name: "", email: "", cpf: "", password: "", passwordConfirm: ""});
    };

    handleFieldChangeStreet = (event) => {
        this.setState({ street: event.target.value })
    }

    handleFieldChangeNumber = (event) => {
        this.setState({ number: event.target.value })
    }

    handleFieldChangeNeighbourhood = (event) => {
        this.setState({ neighbourhood: event.target.value })
    }

    handleFieldChangeCity = (event) => {
        this.setState({ city: event.target.value })
    }

    handleFieldChangeState = (event) => {
        this.setState({ state: event.target.value })
    }

    handleFieldChangeComplement = (event) => {
        this.setState({ complement: event.target.value })
    }

    render() {

        const { street, number, neighbourhood, city, state, complement } = this.state;

        return(

            <div>
                <Header title={''} isArrowBackVisible={true}/>

                <ContainerAddressPage onSubmit={this.handleSubmit}>
            
                    <TextRegister>Meu endereço</TextRegister>

                    <InputAddress
                        required
                        id="outlined-required-street"
                        label="Logradouro"
                        placeholder="Rua / Av."
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleFieldChangeStreet}
                        name="street"
                        type="text"
                        value={street}
                    />

                    <InputNumber
                        required
                        id="outlined-required-number"
                        label="Número"
                        placeholder="Número"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleFieldChangeNumber}
                        name="number"
                        type="number"
                        value={number}
                    />

                    <InputHouse
                        id="outlined-required-neighbourhood"
                        label="Complemento"
                        placeholder="Apto. / Bloco"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleFieldChangeNeighbourhood}
                        name="neighbourhood"
                        type="text"
                        value={neighbourhood}
                    />

                    <InputNeighborhood
                        required
                        id="outlined-required-city"
                        label="Bairro"
                        placeholder="Bairro"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleFieldChangeCity}
                        name="city"
                        type="text"
                        value={city}
                    />


                    <InputCity
                        required
                        id="outlined-required-state"
                        label="Cidade"
                        placeholder="Cidade"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleFieldChangeState}
                        name="state"
                        type="text"
                        value={state}
                    />


                    <InputState
                        required
                        id="outlined-required-complement"
                        label="Estado"
                        placeholder="Estado"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleFieldChangeComplement}
                        name="complement"
                        type="text"
                        value={complement}
                    />

                    <MainButtonComponent title="Salvar" type="submit"/>

                </ContainerAddressPage>
            </div>
        );
    };
};

const mapStateToProps = state =>({
    actualProfile: state.requests.actualProfile
})


function mapDispatchToProps(dispatch) {
    return {
        createdAddress: (street, number, neighbourhood, city, state, complement, local) => dispatch(signUpAddress(street, number, neighbourhood, city, state, complement, local)),
        goToFeed: () => dispatch(push(routes.feed)),
        getProfile: () => dispatch(getProfile())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(AddressPage);