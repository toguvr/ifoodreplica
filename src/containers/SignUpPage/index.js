import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/auth";
import Header from '../../components/Header';
import MainButtonComponent from '../../components/MainButton'
import { ImgLogo, ContainerSignUpPage, TextRegister, InputName, InputEmail, InputCPF, InputPassword, InputPasswordConfirm } from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const imgIcon = {
    logo: require('../../assets/logo.svg'),
};

class SignUpPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            cpf: "",
            password: "",
            passwordConfirm: "",
            showPassword: false,
            showPasswordConfirm: false,
            open: false,
            error:{msg:"", status:false}
        }
    };

    formatCPF = value => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    };

    handleFieldChangeCPF = event => {
        const formattedCPF = this.formatCPF(event.target.value);
        this.setState({ cpf: formattedCPF })
    };

    validatePassword = (event) => {
        event.preventDefault()

        const password = this.state.password
        const passwordConfirm = this.state.passwordConfirm

        if (password === passwordConfirm ) {
            this.handleSubmit()
        }
        else {
            
            this.setState({error:{msg:"deve ser a mesma que a anterior", status: true}})
        }
        
    };

    handleSubmit = () => {

        const { name, email, cpf, password } = this.state

        this.props.createdUser(name, email, cpf, password)

    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
    };

    handleFieldChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleFieldChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    handleFieldChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    handleFieldChangePasswordConfirm = (event) => {
        this.setState({ passwordConfirm: event.target.value })
    }

    render() {

        const { name, cpf, email, password, passwordConfirm } = this.state;

        return (

            <div>
                <Header title={''} isArrowBackVisible={true} />

                <ContainerSignUpPage onSubmit={this.validatePassword}>
                    <ImgLogo src={imgIcon.logo} alt="logo" />

                    <TextRegister>Cadastrar</TextRegister>

                    <InputName
                        required
                        id="outlined-required-name"
                        label="Nome"
                        placeholder="Nome e Sobrenome"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleFieldChangeName}
                        name="name"
                        type="text"
                        value={name}
                    />

                    <InputEmail
                        required
                        id="outlined-required-email"
                        label="E-mail"
                        placeholder="email@email.com"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleFieldChangeEmail}
                        name="email"
                        type="email"
                        value={email}
                    />

                    <InputCPF
                        required
                        id="outlined-required-cpf"
                        label="CPF"
                        placeholder="000.000.000-00"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}

                        onChange={this.handleFieldChangeCPF}
                        name="cpf"
                        type="text"
                        value={cpf}
                        title="O CPF deve conter esse formato 000.000.000-00"
                    />

                    <InputPassword
                        required
                        id="outlined-required-password-signUp"
                        label="Senha"
                        placeholder="Mínimo 6 caracteres"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        inputProps={{
                            minlength: "6"
                        }}
                        onChange={this.handleFieldChangePassword}
                        name="passwordSignUp"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={password}
                        title="A senha deve ter no mínimo 6 caracteres"
                    />


                    <InputPasswordConfirm
                        required
                        id="outlined-required-confirm"
                        label="Confirmar"
                        placeholder="Confirme a senha anterior"
                        margin="normal"
                        variant="outlined"
                        error={this.state.error.status}
                        helperText={this.state.error.msg}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPasswordConfirm}
                                    >
                                        {this.state.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.handleFieldChangePasswordConfirm}
                        name="passwordConfirm"
                        type={this.state.showPasswordConfirm ? 'text' : 'password'}
                        value={passwordConfirm}
                    />

                    <MainButtonComponent title="Criar" type="submit" />

                </ContainerSignUpPage>
            </div>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return {
        createdUser: (name, email, cpf, password) => dispatch(signUp(name, email, cpf, password)),
    }
}
export default connect(
    null,
    mapDispatchToProps
    )(SignUpPage);


