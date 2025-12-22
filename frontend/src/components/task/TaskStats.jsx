import { CheckCircle2, Clock, ListTodo, Zap } from 'lucide-react';
import { getTaskStats } from '../../utils/helpers';

export default function TaskStats({ tasks }) {
  const stats = getTaskStats(tasks);

  const statCards = [
    {
      label: 'Total Tasks',
      value: stats.total,
      icon: ListTodo,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      label: 'To Do',
      value: stats.todo,
      icon: Clock,
      color: 'text-slate-500',
      bg: 'bg-slate-50',
      border: 'border-slate-200'
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      icon: Zap,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      border: 'border-amber-100'
    },
    {
      label: 'Completed',
      value: stats.done,
      icon: CheckCircle2,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-100'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <div 
          key={index} 
          className={`bg-white rounded-2xl p-6 border ${stat.border} shadow-sm hover:shadow-md transition-all duration-300 group`}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {stat.label}
              </p>
              <p className="text-3xl font-black text-slate-900 group-hover:scale-110 transition-transform origin-left">
                {stat.value}
              </p>
            </div>
            <div className={`${stat.bg} ${stat.color} p-4 rounded-xl group-hover:rotate-6 transition-transform`}>
              <stat.icon size={24} strokeWidth={2.5} />
            </div>
          </div>
          
          {/* নিচের ডেকোরেটিভ বার (Optional) */}
          <div className="mt-4 w-full h-1 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full ${stat.color.replace('text', 'bg')} transition-all duration-1000`}
              style={{ width: stats.total > 0 ? `${(stat.value / stats.total) * 100}%` : '0%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}