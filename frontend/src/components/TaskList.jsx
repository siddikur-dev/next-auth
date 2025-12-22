import React from 'react';
import { Trash2, Calendar, User, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';

export default function TaskList({ tasks, onDelete, onStatusChange }) {
  // আপনার সিগনেচার লিনিয়ার কালার
  const brandGradient = "bg-linear-to-r from-blue-300 to-blue-700";

  if (tasks.length === 0) {
    return (
      <div className="text-center py-24 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="text-slate-300" size={32} />
        </div>
        <p className="text-slate-400 font-bold tracking-tight">No tasks found. Start by creating one!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Task Info</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Assignee</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Priority</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {tasks.map((task) => (
              <tr key={task._id} className="hover:bg-blue-50/20 transition-all duration-300 group">
                
                {/* 1. Task Title & Date */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${task.status === 'DONE' ? 'bg-green-400' : 'bg-blue-400'}`} />
                    <div>
                      <p className="text-sm font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                        {task.title}
                      </p>
                      <p className="text-[10px] text-slate-400 font-bold mt-1 flex items-center gap-1 uppercase tracking-tighter">
                        <Calendar size={10} /> Created: 22 Dec
                      </p>
                    </div>
                  </div>
                </td>

                {/* 2. Assignee / User Section (Focus Point) */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${brandGradient} flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-100 ring-2 ring-white transition-transform group-hover:scale-110`}>
                      {task.userName ? task.userName.charAt(0) : <User size={14} />}
                    </div>
                    <div>
                      <p className="text-[12px] font-black text-slate-800 leading-none">
                        {task.userName || "Admin User"}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 font-medium">
                        {task.userEmail || "user@taskmaster.com"}
                      </p>
                    </div>
                  </div>
                </td>

                {/* 3. Priority with soft pill design */}
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    task.priority === 'HIGH' 
                      ? 'bg-red-50 text-red-500 ring-1 ring-red-100' 
                      : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100'
                  }`}>
                    {task.priority || 'Normal'}
                  </span>
                </td>

                {/* 4. Custom Styled Select for Status */}
                <td className="px-8 py-6">
                  <div className="relative inline-block">
                    <select
                      value={task.status}
                      onChange={(e) => onStatusChange(task._id, e.target.value)}
                      className="appearance-none bg-slate-100/70 border-none text-[11px] font-black text-slate-700 py-2 pl-4 pr-8 rounded-xl cursor-pointer hover:bg-slate-200 transition-colors focus:ring-2 focus:ring-blue-300 outline-none"
                    >
                      <option value="TODO">To Do</option>
                      <option value="IN_PROGRESS">Progress</option>
                      <option value="DONE">Completed</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </td>

                {/* 5. Clean Action Button */}
                <td className="px-8 py-6 text-right">
                  <button
                    onClick={() => onDelete(task._id)}
                    className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all active:scale-90"
                    title="Delete Task"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}