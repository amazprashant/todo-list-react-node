import React, { useState } from 'react';
import '../styles/TodoForm.css'; // Import the CSS file for styling

const TodoForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd({ title, completed: false });
            setTitle('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Add a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="todo-button">
                Add Todo
            </button>
        </form>
    );
};

export default TodoForm;