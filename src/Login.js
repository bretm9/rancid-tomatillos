import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  // postLogin = () => {
  //   let init = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({email: this.state.email, password: this.state.password})
  //   };
  //   console.log(init)
  //   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', init)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.state.successfulLogin = true;
  //       console.log(this.state.successfulLogin)
  //     })
  //     .catch(err => this.state.successfulLogin = false)
  // }

  // login = () => {
  //   this.postLogin();
  //   if (this.state.successfulLogin) {
  //     // this.props.toggleLoginView();
  //   }
  // }

  clearInputs = () => {
    this.setState({ email: '', password: ''})
  }

  updateValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // loginUser = (event) => {
  //   event.preventDefault();
  //   this.props.updateLoginData({ email: this.state.email, password: this.state.password });
  //   // console.log(this.props.loginData)
  //   this.clearInputs();
  // }
  
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
        <button className="login-button" onClick={this.loginUser}>Login</button>
      </form>
    )
  }
}

export default Login;