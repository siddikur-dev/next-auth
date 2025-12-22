import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { taskApi } from '../api/taskApi';
import { useToast } from '../context/ToastContext';

export const useTasks = (userId) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  const {
    data: tasks = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tasks', userId],
    queryFn: () => taskApi.getTasks(userId),
    enabled: !!userId,
  });

  // ✅ CREATE with OPTIMISTIC UPDATE
  const createMutation = useMutation({
    mutationFn: taskApi.createTask,
    onMutate: async (newTask) => {
      await queryClient.cancelQueries(['tasks', userId]);
      const previousTasks = queryClient.getQueryData(['tasks', userId]);
      
      queryClient.setQueryData(['tasks', userId], (old = []) => [
        { ...newTask, _id: 'temp-' + Date.now(), createdAt: new Date() },
        ...old,
      ]);
      
      return { previousTasks };
    },
    onError: (err, newTask, context) => {
      console.error('Create Error:', err);
      queryClient.setQueryData(['tasks', userId], context.previousTasks);
      showToast('Failed to create task', 'error');
    },
    onSuccess: () => {
      showToast('Task created successfully', 'success');
    },
    onSettled: () => {
      queryClient.invalidateQueries(['tasks', userId]);
    },
  });

  // ✅ UPDATE with OPTIMISTIC UPDATE
  const updateMutation = useMutation({
    mutationFn: taskApi.updateTask,
    onMutate: async (updatedTask) => {
      await queryClient.cancelQueries(['tasks', userId]);
      const previousTasks = queryClient.getQueryData(['tasks', userId]);
      
      queryClient.setQueryData(['tasks', userId], (old = []) =>
        old.map((task) =>
          task._id === updatedTask.id ? { ...task, ...updatedTask } : task
        )
      );
      
      return { previousTasks };
    },
    onError: (err, updatedTask, context) => {
      console.error('Update Error:', err);
      queryClient.setQueryData(['tasks', userId], context.previousTasks);
      showToast('Failed to update task', 'error');
    },
    onSuccess: () => {
      showToast('Task updated successfully', 'success');
    },
    onSettled: () => {
      queryClient.invalidateQueries(['tasks', userId]);
    },
  });

  // ✅ DELETE with OPTIMISTIC UPDATE - FIXED
  const deleteMutation = useMutation({
    mutationFn: taskApi.deleteTask,
    onMutate: async (deletedId) => {
      console.log('Deleting task with ID:', deletedId); // Debug log
      
      await queryClient.cancelQueries(['tasks', userId]);
      const previousTasks = queryClient.getQueryData(['tasks', userId]);
      
      queryClient.setQueryData(['tasks', userId], (old = []) =>
        old.filter((task) => task._id !== deletedId)
      );
      
      return { previousTasks };
    },
    onError: (err, deletedId, context) => {
      console.error('Delete Error:', err); // ✅ Error details দেখুন
      console.error('Error response:', err.response?.data); // ✅ Backend error
      
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks', userId], context.previousTasks);
      }
      
      showToast(err.response?.data?.message || 'Failed to delete task', 'error');
    },
    onSuccess: (data, deletedId) => {
      console.log('Delete successful:', deletedId);
      showToast('Task deleted successfully', 'success');
    },
    onSettled: () => {
      queryClient.invalidateQueries(['tasks', userId]);
    },
  });

  return {
    tasks,
    isLoading,
    error,
    createTask: createMutation.mutate,
    updateTask: updateMutation.mutate,
    deleteTask: deleteMutation.mutate,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};