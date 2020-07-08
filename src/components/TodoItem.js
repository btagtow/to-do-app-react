import React, { useState } from 'react'
import TodoForm from './TodoForm'

export default ({id, title, content, urgent, deleteTodo}) => {
    const [toggleEditForm, setToggleEditForm] = useState(false)

    console.log(toggleEditForm)
    console.log(setToggleEditForm)

    const handleClick = () => {
        deleteTodo(id)
    }
    
    const showTodo = () => {
        return (
        <li className={ urgent ? "todo-item urgent" : "todo-item"}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button className="delete" onClick={() => setToggleEditForm(true)}>DELETE</button>
        </li>
        )
    }
    
    return (
        showTodo()
    )

}