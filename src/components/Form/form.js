import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from './action'


class Form extends Component {


  handleSubmit = (e) => {

    const newUser = {

      'password': e.target.password.value,
      'email': e.target.email.value,
      'username': e.target.username.value,
      'token': Date.now().toString(36)
    }

    this.props.addUser(newUser);

    if (e.target.checkbox.checked) {

      localStorage.setItem('remember',
        JSON.stringify({
          userName: newUser.username,
          token: newUser.token
        }))
    }

    this.props.history.push(`/users/${newUser.username}`);

    e.preventDefault();
  }

  render() {

    return <form onSubmit={this.handleSubmit}>
      <input type="text" name="email" placeholder='Email' />
      <br />
      <input type="text" name="username" placeholder='UserName' />
      <br />
      <input type="password" name="password" placeholder='Password' />
      <br />
      <input type='checkbox' name='checkbox' />

      <input type="submit" value='Login' />
    </form>


  }
}
const mapStateToProps = state => {
  return {
    user: state.loginReducer.user
  }
}
const mapDispatchToProps = { addUser }

export default connect(mapStateToProps, mapDispatchToProps)(Form);