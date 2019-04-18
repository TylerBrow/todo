import React from 'react'
import {connect} from 'react-redux'

import TodoItem from './TodoItem'

const TodoList = props => (
    <div>
        <div id='todos'>
            <ul className='todolist'>
                {props.todos.filter(todo => todo.status === 'pending').length} items left
                {props.todos.map(todo => ( 
                    <TodoItem {...todo} />
                    
                    ))}

            </ul>
        </div>
        <div id='deleted'>
            <p>{props.deleted}</p>                 
        </div>
    </div>
)


function mapStateToProps(appState) {
    return {
        todos: appState.todos,
        deleted: appState.deleted
    }
}


export default connect(mapStateToProps)(TodoList)