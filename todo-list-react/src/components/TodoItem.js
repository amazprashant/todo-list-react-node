// filepath: src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
    const handleToggle = () => {
        onUpdate(todo.id, { ...todo, completed: !todo.completed });
    };

    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;