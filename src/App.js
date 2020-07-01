import React, { Component } from 'react';
import TodoList from './components/TodoList' 
import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, title: "First Todo", content: "I have a todo", urgent: true},
      {id: 2, title: "second Todo", content: "SECOND ONE I have a todo", urgent: false},
      {id: 3, title: "third Todo", content: "THIRD ONE I have a todo", urgent: true},
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos
    })
  }

  render(){
    return (
      <main>
        <h1>Todo App</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </main>

    )
  }
}


export default App;
