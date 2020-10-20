import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { postLogin } from '../apiCalls';
import { getUserRatings } from '../apiCalls';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  clearInputs = () => {
    this.setState({ email: '', password: ''})
  }

  updateValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginUser = async (event) => {
    const loginData = { email: this.state.email, password: this.state.password }
    event.stopPropagation()
    this.clearInputs();
    const resolvedLogin = await postLogin(loginData)
    const parsedLogin = await resolvedLogin.json()
    let resolvedUserRatings;
    let parsedUserRatings;
    if (resolvedLogin.ok) {
      resolvedUserRatings = await getUserRatings(parsedLogin.user.id)
      parsedUserRatings = await resolvedUserRatings.json()
    }
    if (resolvedLogin.ok && resolvedUserRatings.ok) {
      this.props.updateAppState('loginData', parsedLogin);
      this.props.updateAppState('userRatings', parsedUserRatings);
    } else {
      this.setState({error: 'Login was unsuccessful. Try again'})
    }
  }
  
  render() {
    return (
      <form className="login">
        <h2>Login</h2>
        <input 
          name="email" 
          placeholder="email"
          onChange={this.updateValue}
          value={this.state.email}>
        </input>
        <input 
          name="password"
          placeholder="password"
          onChange={this.updateValue}
          value={this.state.password}>
        </input>
        <NavLink
          to="/" 
          onClick={this.loginUser}
          className="login-button"
          data-testid="login-button">
          Login
        </NavLink>
        {this.state.error && <h3>{this.state.error}</h3>}
      </form>
    )
  }
}

export default Login;