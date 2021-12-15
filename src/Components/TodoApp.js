import React, { useState } from "react"
import './TodoApp.css'

function TodoApp() {

    const [input, setInput] = useState('')
    const [item, setItem] = useState([])

    function handleChange(event) {
        const value = event.target.value
        setInput(value)
    }

    function storeItem(event) {
        event.preventDefault()
        setItem([...item, input])
        setInput("")
    }

    function deleteItem(id) {
        setItem(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="todo-container">
            <form className="inputSection" onSubmit={storeItem}>
                <h1>Todo App</h1>
                <input
                    onChange={handleChange}
                    value={input}
                    placeholder="Enter Notes..."
                    type="text" />
            </form>
            <ul>
                {item.map((items, index) => <li key={index}>{items}<i onClick={() => deleteItem(index)} className="fas fa-trash-alt"></i></li>)};
            </ul>
        </div>
    )
}

export default TodoApp