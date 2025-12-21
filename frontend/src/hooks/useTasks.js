// frontend/src/hooks/useTasks.js

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { taskApi } from '../api/taskApi';

export const useTasks = (userId) => {
  const queryClient = useQueryClient();

  // Fetch tasks
  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks', userId],
    queryFn: () => taskApi.getTasks(userId),
    enabled: !!userId,
  });

  // Create task mutation
  const createMutation = useMutation({
    mutationFn: taskApi.createTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks', userId]);
    },
  });

  // Update task mutation
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => taskApi.updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks', userId]);
    },
  });

  // Delete task mutation
  const deleteMutation = useMutation({
    mutationFn: taskApi.deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks', userId]);
    },
  });

  return {
    tasks: data?.data || [],
    isLoading,
    error,
    createTask: createMutation.mutate,
    updateTask: updateMutation.mutate,
    deleteTask: deleteMutation.mutate,
  };
};