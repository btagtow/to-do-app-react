import React, { Component } from 'react'

export default class TodoForm extends Component {

    state = {
        title: "",
        content: "",
        urgent: false,
    }

    handleChange = (event) => {
        let { name, checked, value } = event.target
        value = name === 'urgent' ? checked : value 
        this.setState({
            [name]: value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
    }
    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <h2>Add new Todo:</h2>
                <label> Title </label>
                <input name="title" value={this.state.title} onChange={this.handleChange}></input>
                <label> Content </label>
                <input name="content" value={this.state.content} onChange={this.handleChange}></input>
                <label> Urgent</label>
                <input type="checkbox" name="urgent" value={this.state.urgent} onChange={this.handleChange}></input>
                <input type="submit"></input>
            </form>
        
        )
    }
}
