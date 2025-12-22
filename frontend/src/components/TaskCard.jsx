import React, { useState } from "react";
import {
  Trash2,
  ChevronDown,
  Check,
  Clock,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Swal from "sweetalert2";

export default function TaskCard({ task, onDelete, onStatusChange }) {
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  const statusOptions = [
    { id: "TODO", label: "To Do", color: "text-slate-500", bg: "bg-slate-100", icon: Clock },
    { id: "IN_PROGRESS", label: "In Progress", color: "text-blue-600", bg: "bg-blue-50", icon: Zap },
    { id: "DONE", label: "Completed", color: "text-green-600", bg: "bg-green-50", icon: CheckCircle2 },
  ];

  const currentStatus = statusOptions.find((s) => s.id === task.status) || statusOptions[0];

  const priorityColors = {
    LOW: "border-l-4 border-emerald-500",
    MEDIUM: "border-l-4 border-amber-500",
    HIGH: "border-l-4 border-rose-500",
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      customClass: { popup: "rounded-3xl" },
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(task._id);
        Swal.fire({ title: "Deleted!", icon: "success", timer: 1000, showConfirmButton: false, customClass: { popup: "rounded-3xl" } });
      }
    });
  };

  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-[220px] ${priorityColors[task.priority]}`}
    >
      {/* Header Section */}
      <div className="p-4 flex justify-between items-start gap-3 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <h3 className="text-md font-extrabold text-slate-800 leading-tight line-clamp-2">
          {task.title}
        </h3>

        <div className="relative shrink-0">
          <button
            onClick={() => setShowStatusMenu(!showStatusMenu)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold text-[9px] uppercase tracking-wider transition-all active:scale-95 border border-transparent hover:border-slate-200 ${currentStatus.bg} ${currentStatus.color}`}
          >
            {task.status}
            <ChevronDown size={12} className={`transition-transform duration-300 ${showStatusMenu ? "rotate-180" : ""}`} />
          </button>

          {showStatusMenu && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowStatusMenu(false)}></div>
              <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-100 shadow-2xl rounded-xl p-1.5 z-20 animate-in fade-in zoom-in duration-200">
                {statusOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => { onStatusChange(task._id, option.id); setShowStatusMenu(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors mb-1 last:mb-0 ${task.status === option.id ? `${option.bg} ${option.color}` : "text-slate-600 hover:bg-slate-50"}`}
                  >
                    <div className="flex items-center gap-2">
                      <option.icon size={14} /> {option.label}
                    </div>
                    {task.status === option.id && <Check size={12} />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content Section with Auto Scroll */}
      <div className="px-4 flex-1 overflow-y-auto custom-scrollbar pb-2">
        <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-wrap">
          {task.description || "No description provided for this task."}
        </p>
      </div>

      {/* Footer Section */}
      <div className="px-4 py-3 bg-slate-50/80 border-t border-slate-100 flex justify-between items-center mt-auto">
        <div className="flex flex-col">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Priority</span>
          <span className="text-[11px] font-bold text-slate-700">{task.priority}</span>
        </div>

        <button
          onClick={handleDelete}
          className="flex items-center gap-1.5 px-3 py-1.5 text-rose-500 hover:bg-rose-100/50 rounded-lg text-[10px] font-black transition-all group-hover:scale-105"
        >
          <Trash2 size={14} />
          DELETE
        </button>
      </div>

      {/* custom scrollbar (Inline Style or Tailwind Class) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}