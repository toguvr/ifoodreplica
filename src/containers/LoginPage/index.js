import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { login, clearErrorMessageAction } from '../../actions/auth';
import MainButtonComponent from '../../components/MainButton';
import {
  ImgLogo,
  ContainerLoginPage,
  TextEnter,
  InputEmail,
  InputPassword,
  TextRegisterUser,
  GoToSignUp,
  ErrorMessage
} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const imgIcon = {
  logo: require('../../assets/logo.svg')
};

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      showPassword: false
    };
  }

  onClickLogin = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.doLogin(email, password);
  };

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { email, password } = this.setState;

    return (
      <div>
        <ContainerLoginPage onSubmit={this.onClickLogin}>
          <ImgLogo src={imgIcon.logo} alt="logo" />

          <TextEnter>Entrar</TextEnter>

          <InputEmail
            required
            id="outlined-required-name"
            label="E-mail"
            placeholder="email@email.com"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            value={email}
          />

          <InputPassword
            required
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
            onChange={this.handleFieldChange}
            name="password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={password}
            id="password"
          />
          <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
          <MainButtonComponent title="Entrar" type="submit" />
          <TextRegisterUser>
            Não possui cadastro?{' '}
            <GoToSignUp onClick={this.props.goToSignUp}>
              Clique aqui.
            </GoToSignUp>
          </TextRegisterUser>
        </ContainerLoginPage>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.loginError
  };
};

function mapDispatchToProps(dispatch) {
  return {
    doLogin: (email, password) => dispatch(login(email, password)),
    goToSignUp: () => dispatch(push(routes.signUp))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
