const Todo = require('../../models/todo');

// Existing methods...
const getAllTodos = async () => {
    return await Todo.findAll();
};

const createTodo = async (data) => {
    return await Todo.create(data);
};

// New methods
const updateTodo = async (id, updatedData) => {
    const todo = await Todo.findByPk(id);
    if (!todo) {
        return null;
    }
    return await todo.update(updatedData);
};

const deleteTodo = async (id) => {
    const todo = await Todo.findByPk(id);
    if (!todo) {
        return null;
    }
    await todo.destroy();
    return true;
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };