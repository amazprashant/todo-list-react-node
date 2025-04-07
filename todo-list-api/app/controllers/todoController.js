const todoService = require('../services/todoService');

// Existing methods...
const getTodos = async (req, res) => {
    const todos = await todoService.getAllTodos();
    res.json(todos);
};

const createTodo = async (req, res) => {
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
};

// New methods
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedTodo = await todoService.updateTodo(id, updatedData);
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Error updating todo', error });
    }
};

const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await todoService.deleteTodo(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo', error });
    }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };