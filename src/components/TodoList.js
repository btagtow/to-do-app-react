import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, deleteTodo}){
    //^ destructuring todos from the props object

    const showTodos = todos.map(todo => {
        return (
            <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo}> </TodoItem>
        )
    })
    return (
        <ul className="todo-list">
            {showTodos}
        </ul>
    )

}