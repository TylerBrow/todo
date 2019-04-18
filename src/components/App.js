import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'


import TodoForm from './TodoForm'
import TodoList from './TodoList'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <div id='container'>
            <TodoForm />
            <TodoList />
          </div>
      </Provider>
    )
  }
}

export default App