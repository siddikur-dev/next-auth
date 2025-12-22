import axiosInstance from './axios';

export const taskApi = {
  getTasks: async (userId) => {
    const { data } = await axiosInstance.get(`/tasks?userId=${userId}`);
    return data.data;
  },

  getTask: async (id) => {
    const { data } = await axiosInstance.get(`/tasks/${id}`);
    return data.data;
  },

  createTask: async (taskData) => {
    const { data } = await axiosInstance.post('/tasks', taskData);
    return data.data;
  },

  updateTask: async ({ id, ...taskData }) => {
    const { data } = await axiosInstance.put(`/tasks/${id}`, taskData);
    return data.data;
  },

  deleteTask: async (id) => {
    const { data } = await axiosInstance.delete(`/tasks/${id}`);
    return data;
  },
};