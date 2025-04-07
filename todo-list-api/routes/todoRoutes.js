const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../app/controllers/todoController');

const router = express.Router();

// Existing routes...
router.get('/todos', getTodos);
router.post('/todos', createTodo);

// New routes
router.put('/todos/:id', updateTodo); // Update a todo
router.delete('/todos/:id', deleteTodo); // Delete a todo

module.exports = router;