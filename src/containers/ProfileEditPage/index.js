import React from "react";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ContainerProfilePage, InputName, InputEmail, InputCPF } from './styled';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/auth'

class ProfileEditPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            cpf: "",
        }
    }
    componentDidMount(){
        this.setState({name: this.props.actualProfile.name, email: this.props.actualProfile.email, cpf: this.props.actualProfile.cpf})
    }

    formatCPF = value => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    };

    handleInputs=event=>{
        if(event.target.name==="cpf"){
            const FormatedCpf = this.formatCPF(event.target.value)
            this.setState({[event.target.name]:FormatedCpf})
        }else{
        this.setState({[event.target.name]:event.target.value})
        }
    }

    changeProfile=()=>{
        const {name, email, cpf} = this.state
        this.props.updateProfile(name, email, cpf)
    }

    render() {

        const { name, email, cpf } = this.state

        return (

            <div>
                <Header title={'Editar'} isArrowBackVisible={true} />

                <ContainerProfilePage>
                    <InputName
                        required
                        id="outlined-required-name"
                        label="Nome"
                        margin="normal"
                        variant="outlined"
                        value={name}
                        name="name"
                        onChange={this.handleInputs}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputEmail
                        required
                        name="email"
                        id="outlined-required-email"
                        label="E-mail"
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={this.handleInputs}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputCPF
                        required
                        id="outlined-required-cpf"
                        label="CPF"
                        name="cpf"
                        margin="normal"
                        variant="outlined"
                        value={cpf}
                        onChange={this.handleInputs}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <MainButtonComponent onButtonClick={this.changeProfile} title="Salvar" />

                </ContainerProfilePage>
            </div>
        );
    };
};

const mapStateToProps = state =>({
    actualProfile: state.requests.actualProfile
})

const mapDispatchToProps = dispatch =>({
    updateProfile: (name, email, cpf)=>dispatch(updateProfile(name, email, cpf)),
})

export default connect(mapStateToProps, mapDispatchToProps) (ProfileEditPage);