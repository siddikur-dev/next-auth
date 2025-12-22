import { useForm } from 'react-hook-form';
import { X, ClipboardList, AlignLeft, Flag, CheckCircle2, Loader2 } from 'lucide-react';
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
    if (!initialData) reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6 animate-in fade-in duration-300">
      
      {/* 1. Title Input */}
      <div className="space-y-2">
        <label htmlFor="title" className="flex items-center gap-2 text-sm font-bold text-slate-700">
          <ClipboardList size={16} className="text-blue-600" />
          Task Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          {...register('title', {
            required: 'Title is required',
            minLength: { value: 3, message: 'Title must be at least 3 characters' },
          })}
          placeholder="e.g., Design Landing Page"
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl transition-all focus:outline-none focus:ring-4 focus:bg-white ${
            errors.title 
              ? 'border-red-300 focus:ring-red-100' 
              : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/10'
          }`}
        />
        {errors.title && (
          <p className="text-xs font-semibold text-red-500 ml-1 italic tracking-wide">{errors.title.message}</p>
        )}
      </div>

      {/* 2. Description Textarea */}
      <div className="space-y-2">
        <label htmlFor="description" className="flex items-center gap-2 text-sm font-bold text-slate-700">
          <AlignLeft size={16} className="text-blue-600" />
          Description
        </label>
        <textarea
          id="description"
          {...register('description')}
          rows={4}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white resize-none"
        />
      </div>

      {/* 3. Status & Priority Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Status */}
        <div className="space-y-2">
          <label htmlFor="status" className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <CheckCircle2 size={16} className="text-blue-600" />
            Current Status
          </label>
          <div className="relative">
            <select
              id="status"
              {...register('status', { required: 'Status is required' })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 font-semibold text-slate-700 appearance-none cursor-pointer"
            >
              <option value={TASK_STATUS.TODO}>To Do</option>
              <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
              <option value={TASK_STATUS.DONE}>Completed</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <X size={14} className="rotate-45" /> {/* Custom arrow substitute */}
            </div>
          </div>
        </div>

        {/* Priority */}
        <div className="space-y-2">
          <label htmlFor="priority" className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Flag size={16} className="text-blue-600" />
            Set Priority
          </label>
          <div className="relative">
            <select
              id="priority"
              {...register('priority', { required: 'Priority is required' })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 font-semibold text-slate-700 appearance-none cursor-pointer"
            >
              <option value={TASK_PRIORITY.LOW}>Low Priority</option>
              <option value={TASK_PRIORITY.MEDIUM}>Medium Priority</option>
              <option value={TASK_PRIORITY.HIGH}>High Priority</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <X size={14} className="rotate-45" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-100 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Syncing...</span>
            </>
          ) : (
            <span>{initialData ? 'Update Changes' : 'Create Task'}</span>
          )}
        </button>
      </div>
    </form>
  );
}