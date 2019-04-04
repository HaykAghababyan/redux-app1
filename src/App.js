import React, { Component } from 'react';
import './index.css';
import Form from './components/Form/form';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import MyPage from './components/mypage/mypage'
import Login from './components/Login/login'
class App extends Component {
  render() {
    return <BrowserRouter>
      <div>
        <Login path="/" exact component={Form} />
        <Route path="/users/:userName" component={MyPage} />
      </div>
    </BrowserRouter>

  }
}



serviceWorker.unregister();

export default App;