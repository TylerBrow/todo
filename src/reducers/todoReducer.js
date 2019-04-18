const initialState = {
  todos: [],
  deleted: []
  
}

export default function todoReducer(state = initialState, action) {
  switch ( action.type ) {
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, action.item]}
    case 'CHANGE_STATUS':
      return {...state, todos:state.todos.map(todo => {
        if (todo.id === action.id) {
          return {
            text: todo.text,
            status: 'completed',
            id:todo.id
            }
          } else {
            return todo
          }
      })}
      case 'DELETE_ITEM':
        return {...state, deleted: [action.text], todos: state.todos.filter(todo => {
          return todo.id !== action.id
        })}
    default:
      return state
  }
}