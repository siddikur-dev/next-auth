import React from 'react';

export default function TaskCard({ task, onDelete }) {
  const statusColors = {
    TODO: 'bg-gray-200 text-gray-800',
    IN_PROGRESS: 'bg-blue-200 text-blue-800',
    DONE: 'bg-green-200 text-green-800',
  };

  const priorityColors = {
    LOW: 'border-l-4 border-green-500',
    MEDIUM: 'border-l-4 border-yellow-500',
    HIGH: 'border-l-4 border-red-500',
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${priorityColors[task.priority]}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>
      
      {task.description && (
        <p className="text-gray-600 text-sm mb-3">{task.description}</p>
      )}
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Priority: <span className="font-medium">{task.priority}</span>
        </span>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}