import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from './store/actions/user'

class App extends Component {
  
  state = {
    email: ''
  }

  inputChange = e => {
    const { name ,value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    this.props.addUser(this.state.email);
     console.log(this.props.count)
  }

  render() {
    
    return (
      <div>
       
        <form>
          <input type="text" name="email" onChange={this.inputChange}/>
          <input type="text" name="e" onChange={this.inputChange}/>
          <br/>
          <button type="button" onClick={this.handleSubmit}>Send</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
   count: state.userList
  }
  
}

const mapDispatchToProps = { addUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
