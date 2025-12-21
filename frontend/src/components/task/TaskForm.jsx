import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { TASK_STATUS, TASK_PRIORITY } from '../../utils/constants';

export default function TaskForm({ onSubmit, onCancel, initialData, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialData || {
      title: '',
      description: '',
      status: TASK_STATUS.TODO,
      priority: TASK_PRIORITY.MEDIUM,
    },
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
    if (!initialData) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          {...register('title', {
            required: 'Title is required',
            minLength: { value: 3, message: 'Title must be at least 3 characters' },
            maxLength: { value: 100, message: 'Title cannot exceed 100 characters' },
          })}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter task title"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          {...register('description')}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Enter task description (optional)"
        />
      </div>

      {/* Status & Priority Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status"
            {...register('status', { required: 'Status is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value={TASK_STATUS.TODO}>To Do</option>
            <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
            <option value={TASK_STATUS.DONE}>Done</option>
          </select>
        </div>

        {/* Priority */}
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            id="priority"
            {...register('priority', { required: 'Priority is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value={TASK_PRIORITY.LOW}>Low</option>
            <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
            <option value={TASK_PRIORITY.HIGH}>High</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="btn-secondary"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : initialData ? 'Update Task' : 'Create Task'}
        </button>
      </div>
    </form>
  );
}