
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const taskApi = {
  // Get all tasks
  getTasks: async (userId) => {
    const res = await fetch(`${API_URL}/tasks?userId=${userId}`);
    if (!res.ok) throw new Error('Failed to fetch tasks');
    return res.json();
  },

  // Create task
  createTask: async (taskData) => {
    const res = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
    if (!res.ok) throw new Error('Failed to create task');
    return res.json();
  },

  // Update task
  updateTask: async (id, taskData) => {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
    if (!res.ok) throw new Error('Failed to update task');
    return res.json();
  },

  // Delete task
  deleteTask: async (id) => {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete task');
    return res.json();
  },
};