import React, {Component} from 'react'
import {changeStatus, deleteItem} from '../actions/actions'

class TodoItem extends Component {
    handleClick = (e) => {
        changeStatus(this.props.id)
    }

    delete = (e) => {
        e.preventDefault()
        deleteItem(this.props.id, this.props.text)
    }
    render() {
        return (
            <li onClick={this.handleClick}><span>{this.props.id}</span>  <span>{this.props.text}</span>  <span>{this.props.status}</span><button onClick={this.delete}>X</button></li>
        )
    }
}

export default TodoItem