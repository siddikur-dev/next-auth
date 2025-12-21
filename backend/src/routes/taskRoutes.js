const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { validateTask, validateUpdateTask } = require('../middleware/validation');

// GET all tasks for a user
router.get('/', getTasks);

// GET single task
router.get('/:id', getTaskById);

// POST create task
router.post('/', validateTask, createTask);

// PUT update task
router.put('/:id', validateUpdateTask, updateTask);

// DELETE task
router.delete('/:id', deleteTask);

module.exports = router;