import { TASK_STATUS, STATUS_CONFIG } from "../../utils/constants";
import TaskCard from "../TaskCard";
import { MoreHorizontal } from "lucide-react";

export default function TaskKanban({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  const columns = [
    { key: TASK_STATUS.TODO, title: "To Do" },
    { key: TASK_STATUS.IN_PROGRESS, title: "In Progress" },
    { key: TASK_STATUS.DONE, title: "Completed" },
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
            // Keeping the column height fixed at 650px for a clean dashboard look
            className="bg-slate-100/50 rounded-[2rem] p-5 border border-slate-200/60 flex flex-col h-[650px]"
          >
            {/* Header section: Always stays at the top */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${statusConfig.dotColor} shadow-sm`}
                  ></div>
                  <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">
                    {column.title}
                  </h3>
                  <span className="bg-white px-2.5 py-1 rounded-xl border border-slate-200 text-[10px] font-black text-slate-500 shadow-sm">
                    {columnTasks.length}
                  </span>
                </div>
                <button className="text-slate-300 hover:text-slate-600 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              {/* Progress bar reflects task density in this column */}
              <div className="h-1.5 w-full bg-slate-200/50 rounded-full overflow-hidden">
                <div
                  className={`h-full ${statusConfig.dotColor} transition-all duration-700 ease-in-out`}
                  style={{
                    width:
                      tasks.length > 0
                        ? `${(columnTasks.length / tasks.length) * 100}%`
                        : "0%",
                  }}
                ></div>
              </div>
            </div>

            {/* Content area: This is the only part that scrolls if tasks overflow */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {columnTasks.length === 0 ? (
                /* Empty state when there's nothing to show */
                <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-slate-200/80 rounded-[2rem] bg-slate-50/50">
                  <p className="text-slate-300 text-[10px] font-black uppercase tracking-widest">
                    Empty
                  </p>
                </div>
              ) : (
                /* List of task cards */
                <div className="space-y-3 pb-4">
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