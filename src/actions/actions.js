import store from '../store'
// so we can use store.dispatch()
let id = 0
export function addTodo(todo) {
    id++
  
    store.dispatch({
        type: 'ADD_TODO',
        item: {
        text: todo,
        status: 'pending',
        id: id
    }})
}

export function changeStatus(id) {
    store.dispatch({
        type: 'CHANGE_STATUS',
        id: id
    })
}
export function deleteItem(id, name) {
    store.dispatch ({
        type:'DELETE_ITEM',
        id: id,
        text: name
    })
}