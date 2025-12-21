import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import TaskForm from '../components/task/TaskForm';
import { useTasks } from '../hooks/useTasks';
import { useUser } from '../context/UserContext';

export default function CreateTaskPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { createTask, isCreating } = useTasks(user._id);

  const handleSubmit = (data) => {
    createTask(
      { ...data, userId: user._id },
      {
        onSuccess: () => {
          navigate('/tasks');
        },
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/tasks')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Tasks
      </button>

      {/* Form Card */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create New Task
        </h1>
        <TaskForm
          onSubmit={handleSubmit}
          onCancel={() => navigate('/tasks')}
          isLoading={isCreating}
        />
      </div>
    </div>
  );
}