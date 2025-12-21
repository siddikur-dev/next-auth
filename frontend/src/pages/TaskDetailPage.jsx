import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, Calendar, Clock, User, Pencil, Trash2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { taskApi } from '../api/taskApi';
import { useTasks } from '../hooks/useTasks';
import { useUser } from '../context/UserContext';
import Spinner from '../components/ui/Spinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { STATUS_CONFIG, PRIORITY_CONFIG } from '../utils/constants';
import { formatDate } from '../utils/helpers';

export default function TaskDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { deleteTask } = useTasks(user._id);

  const { data: task, isLoading, error } = useQuery({
    queryKey: ['task', id],
    queryFn: () => taskApi.getTask(id),
  });

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id, {
        onSuccess: () => {
          navigate('/tasks');
        },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error || !task) {
    return <ErrorMessage message="Task not found" />;
  }

  const statusConfig = STATUS_CONFIG[task.status];
  const priorityConfig = PRIORITY_CONFIG[task.priority];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/tasks')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Tasks
      </button>

      {/* Task Card */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        {/* Header */}
        <div className={`border-l-8 ${priorityConfig.borderColor} p-6`}>
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 flex-1">
              {task.title}
            </h1>
            <div className="flex items-center gap-2">
              <Link
                to={`/tasks/${id}/edit`}
                className="text-gray-400 hover:text-primary-600 transition-colors p-2"
              >
                <Pencil className="h-5 w-5" />
              </Link>
              <button
                onClick={handleDelete}
                className="text-gray-400 hover:text-red-600 transition-colors p-2"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Status & Priority Badges */}
          <div className="flex items-center gap-3">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${statusConfig.color}`}
            >
              {statusConfig.label}
            </span>
            <span className={`font-medium ${priorityConfig.color}`}>
              {priorityConfig.label} Priority
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          {task.description && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {task.description}
              </p>
            </div>
          )}

          {/* Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Created</p>
                <p className="text-gray-900 font-medium">
                  {formatDate(task.createdAt)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="text-gray-900 font-medium">
                  {formatDate(task.updatedAt)}
                </p>
              </div>
            </div>

            {task.userId && (
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Assigned To</p>
                  <p className="text-gray-900 font-medium">
                    {task.userId.name}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}