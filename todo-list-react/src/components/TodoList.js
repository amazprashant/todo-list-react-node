import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css'; // Import CSS for styling

const TodoList = ({ todos, onUpdate, onDelete }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;