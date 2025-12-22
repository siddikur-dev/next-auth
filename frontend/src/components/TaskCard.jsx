import React, { useState } from "react";
import {
  Edit2,
  Trash2,
  ChevronDown,
  Check,
  Clock,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Swal from "sweetalert2";

export default function            TaskCard({ task, onDelete, onStatusChange }) {
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  // Industry standard config
  const statusOptions = [
    {
      id: "TODO",
      label: "To Do",
      color: "text-slate-500",
      bg: "bg-slate-100",
      icon: Clock,
    },
    {
      id: "IN_PROGRESS",
      label: "In Progress",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: Zap,
    },
    {
      id: "DONE",
      label: "Completed",
      color: "text-green-600",
      bg: "bg-green-50",
      icon: CheckCircle2,
    },
  ];

  const currentStatus =
    statusOptions.find((s) => s.id === task.status) || statusOptions[0];

  // priority border
  const priorityColors = {
    LOW: "border-l-4 border-emerald-500",
    MEDIUM: "border-l-4 border-amber-500",
    HIGH: "border-l-4 border-rose-500",
  };

  // SweetAlert Delete Confirmation
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb", // blue-600
      cancelButtonColor: "#ef4444", // red-500
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(task._id);
        Swal.fire({
          title: "Deleted!",
          text: "Task has been removed.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          customClass: { popup: "rounded-3xl" },
        });
      }
    });
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-slate-300 p-4 transition-all hover:shadow-xl hover:-translate-y-1 relative ${
        priorityColors[task.priority]
      }`}
    >
      <div className="flex justify-between items-start  gap-4">
        <h3 className="text-lg font-bold text-slate-800 leading-tight">
          {task.title}
        </h3>

        {/* Custom dropdown to status change*/}
        <div className="relative">
          <button
            onClick={() => setShowStatusMenu(!showStatusMenu)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all active:scale-95 ${currentStatus.bg} ${currentStatus.color}`}
          >
            {task.status}
            <ChevronDown
              size={14}
              className={`transition-transform ${
                showStatusMenu ? "rotate-180" : ""
              }`}
            />
          </button>

          {showStatusMenu && (
            <>
              {/* Clicking on the backdrop will close it */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowStatusMenu(false)}
              ></div>

              {/* Dropdown Modal */}
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 shadow-2xl rounded-2xl p-2 z-20 animate-in fade-in zoom-in duration-200">
                <p className="text-[10px] font-black text-slate-400 px-3 py-2 uppercase tracking-widest">
                  Update Status
                </p>
                {statusOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      onStatusChange(task._id, option.id);
                      setShowStatusMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      task.status === option.id
                        ? `${option.bg} ${option.color}`
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <option.icon size={16} />
                      {option.label}
                    </div>
                    {task.status === option.id && <Check size={14} />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <p className="text-slate-500 text-sm  line-clamp-2 leading-relaxed">
        {task.description || "No description provided."}
      </p>

      <div className="flex justify-between items-center pt-4 border-t border-slate-50">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none">
            Priority
          </span>
          <span className="text-xs font-bold text-slate-700">
            {task.priority}
          </span>
        </div>

        <button
          onClick={handleDelete}
          className="flex items-center gap-2 px-4 py-2 text-rose-500 hover:bg-rose-50 rounded-xl text-xs font-bold transition-all"
        >
          <Trash2 size={16} />
          DELETE
        </button>
      </div>
    </div>
  );
}
