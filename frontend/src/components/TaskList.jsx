

import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskCard from './TaskCard';

export default function TaskList({ userId }) {
  const { tasks, isLoading, deleteTask } = useTasks(userId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No tasks yet. Create one!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={() => deleteTask(task._id)}
        />
      ))}
    </div>
  );
}