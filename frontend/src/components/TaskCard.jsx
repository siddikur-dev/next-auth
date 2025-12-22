import React from "react";

export default function TaskCard({ task, onDelete }) {
  // স্ট্যাটাস কালার কনফিগ
  const statusColors = {
    TODO: "bg-gray-200 text-gray-800",
    IN_PROGRESS: "bg-blue-200 text-blue-800",
    DONE: "bg-green-200 text-green-800",
  };

  // প্রায়োরিটি বর্ডার কালার কনফিগ
  const priorityColors = {
    LOW: "border-l-4 border-green-500",
    MEDIUM: "border-l-4 border-yellow-500",
    HIGH: "border-l-4 border-red-500",
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 transition-all ${
        priorityColors[task.priority] || ""
      }`}
    >
      {/* হেডার: টাইটেল এবং স্ট্যাটাস */}
      <div className="flex justify-between items-start mb-2 gap-2">
        <h3 className="text-lg font-semibold text-gray-800 break-words line-clamp-1">
          {task.title}
        </h3>
        <span
          className={`px-2 py-1 rounded text-[10px] font-bold uppercase whitespace-nowrap ${
            statusColors[task.status] || "bg-gray-100"
          }`}
        >
          {task.status}
        </span>
      </div>

      {/* ডেসক্রিপশন */}
      {task.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 italic">
          {task.description}
        </p>
      )}

      {/* ফুটার: প্রায়োরিটি লেবেল এবং ডিলিট বাটন */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-50">
        <span className="text-[11px] text-gray-500 font-medium">
          Priority:{" "}
          <span className="text-gray-800 uppercase font-bold">
            {task.priority}
          </span>
        </span>
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-700 text-xs font-bold transition-colors uppercase"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
