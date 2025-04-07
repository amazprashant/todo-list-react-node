import React, { useEffect, useState } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/todoService';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'; // Import the CSS file for styling

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const data = await getTodos();
            setTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleAdd = async (todo) => {
        try {
            const newTodo = await createTodo(todo);
            setTodos([...todos, newTodo]);
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    const handleUpdate = async (id, updatedTodo) => {
        try {
            const updated = await updateTodo(id, updatedTodo);
            setTodos(todos.map((todo) => (todo.id === id ? updated : todo)));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Todo List</h1>
            <TodoForm onAdd={handleAdd} />
            <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
    );
};

export default App;