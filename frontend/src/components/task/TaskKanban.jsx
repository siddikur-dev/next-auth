import { TASK_STATUS, STATUS_CONFIG } from '../../utils/constants';
import TaskCard from '../TaskCard';

export default function TaskKanban({ tasks, onEdit, onDelete, onStatusChange }) {
  const columns = [
    { key: TASK_STATUS.TODO, title: 'To Do' },
    { key: TASK_STATUS.IN_PROGRESS, title: 'In Progress' },
    { key: TASK_STATUS.DONE, title: 'Done' },
  ];

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map((column) => {
        const columnTasks = getTasksByStatus(column.key);
        const statusConfig = STATUS_CONFIG[column.key];

        return (
          <div key={column.key} className="flex flex-col">
            {/* Column Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${statusConfig.dotColor}`}></div>
                <h3 className="text-lg font-semibold text-gray-900">{column.title}</h3>
                <span className="text-sm text-gray-500">({columnTasks.length})</span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full">
                <div
                  className={`h-1 ${statusConfig.dotColor} rounded-full transition-all duration-300`}
                  style={{ width: `${(columnTasks.length / tasks.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Column Tasks */}
            <div className="flex-1 space-y-3 min-h-[400px]">
              {columnTasks.length === 0 ? (
                <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg">
                  <p className="text-gray-400 text-sm">No tasks</p>
                </div>
              ) : (
                columnTasks.map((task) => (
                  <TaskCard
                    key={task._id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onStatusChange={onStatusChange}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}