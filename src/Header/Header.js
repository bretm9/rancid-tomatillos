import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

function Header(props) {
  if (props.loginData.hasOwnProperty("user")) {
    return (
      <section className="header">
        <h1>Rancid Tomatillos</h1>
        <h3>Hello, {props.loginData.user.name}</h3>
        <NavLink to="/" className="nav">Homepage</NavLink>
        <NavLink to="/login" className="nav" onClick={props.logoutUser}>Logout</NavLink>
      </section>
    )
  }
  return (
    <section>
      <h1>Rancid Tomatillos</h1>
      <h3>You are not logged in</h3>
      <NavLink to="/" className="nav">Home</NavLink>
      <NavLink to="/login" className="nav">Login Page</NavLink>
    </section>
  )
}

Header.propTypes = {
  loginData: PropTypes.object,
  logoutUser: PropTypes.func
}

export default Header;