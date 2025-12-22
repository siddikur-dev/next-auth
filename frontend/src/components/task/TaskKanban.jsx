import { TASK_STATUS, STATUS_CONFIG } from '../../utils/constants';
import TaskCard from '../TaskCard';
import { MoreHorizontal, Plus } from 'lucide-react';

export default function TaskKanban({ tasks, onEdit, onDelete, onStatusChange }) {
  const columns = [
    { key: TASK_STATUS.TODO, title: 'To Do' },
    { key: TASK_STATUS.IN_PROGRESS, title: 'In Progress' },
    { key: TASK_STATUS.DONE, title: 'Completed' },
  ];

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {columns.map((column) => {
        const columnTasks = getTasksByStatus(column.key);
        const statusConfig = STATUS_CONFIG[column.key];

        return (
          <div 
            key={column.key} 
            className="bg-slate-100/50 rounded-2xl p-4 border border-slate-200/60 flex flex-col min-h-[500px]"
          >
            {/* Column Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${statusConfig.dotColor} shadow-sm`}></div>
                  <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                    {column.title}
                  </h3>
                  <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 text-[11px] font-bold text-slate-500 shadow-sm">
                    {columnTasks.length}
                  </span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              {/* Progress Bar Under Title */}
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${statusConfig.dotColor} transition-all duration-500 ease-out`}
                  style={{ width: tasks.length > 0 ? `${(columnTasks.length / tasks.length) * 100}%` : '0%' }}
                ></div>
              </div>
            </div>

            {/* Column Content / Tasks Container */}
            <div className="flex-1 space-y-4">
              {columnTasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 group hover:border-blue-200 transition-colors">
                  <p className="text-slate-400 text-xs font-medium">No tasks found</p>
                  {column.key === TASK_STATUS.TODO && (
                    <button className="mt-2 text-blue-600 text-xs font-bold hover:underline">
                      + Add Task
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {columnTasks.map((task) => (
                    <TaskCard
                      key={task._id}
                      task={task}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onStatusChange={onStatusChange}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}