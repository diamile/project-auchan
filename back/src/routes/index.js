const express = require('express');
const {
  fetchAllTodos,
  deleteTodo,
  updateTodo,
  addTodo,
  completedTodo,
  inprogressTodo
} = require('../controllers')
const router = express.Router();


router.get('/api/todos',fetchAllTodos);
router.delete('/api/todos/:id',deleteTodo)
router.put('/api/todos/:id',updateTodo)
router.post('/api/todos',addTodo)
router.get('/api/todos/completed',completedTodo)
router.get('/api/todos/inprogress',inprogressTodo)

module.exports = router;