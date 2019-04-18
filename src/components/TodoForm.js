import React, {Component} from 'react'
import { addTodo } from '../actions/actions'



class TodoForm extends Component {

    state = {
        todo: ''
      }
    
      handleChange = (e) => {
        this.setState({
          todo: e.target.value
        })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
           addTodo(this.state.todo)
           this.setState({
               todo: ''
           })
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Todo List</h2>
                <input type='text' name='todo' value={this.state.todo} placeholder='What to do?' onChange={this.handleChange} />
            </form>
        )
    }
}

export default TodoForm