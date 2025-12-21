// import { useState } from 'react';
// import { Link } from 'react-router';
// import { Plus, LayoutGrid, List, Search, Filter } from 'lucide-react';
// import { useTasks } from '../hooks/useTasks';
// import { useUser } from '../context/UserContext';
// import TaskList from '../components/task/TaskList';
// import TaskKanban from '../components/task/TaskKanban';
// import TaskStats from '../components/task/TaskStats';
// import Spinner from '../components/ui/Spinner';
// import ErrorMessage from '../components/ui/ErrorMessage';
// import { TASK_STATUS, TASK_PRIORITY } from '../utils/constants';

// export default function TasksPage() {
//   const { user } = useUser();
//   const [view, setView] = useState('kanban');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [filterPriority, setFilterPriority] = useState('all');

//   const {
//     tasks,
//     isLoading,
//     error,
//     updateTask,
//     deleteTask,
//   } = useTasks(user._id);

//   // Filter tasks
//   const filteredTasks = tasks.filter((task) => {
//     const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
//     const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
//     return matchesSearch && matchesStatus && matchesPriority;
//   });

//   const handleStatusChange = (taskId, newStatus) => {
//     updateTask({ id: taskId, status: newStatus });
//   };

//   const handleEdit = (taskData) => {
//     updateTask(taskData);
//   };

//   const handleDelete = (taskId) => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       deleteTask(taskId);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-96">
//         <Spinner size="lg" />
//       </div>
//     );
//   }

//   if (error) {
//     return <ErrorMessage message={error.message} />;
//   }

//   return (
//     <div className="space-y-6">
//       {/* Stats */}
//       <TaskStats tasks={tasks} />

//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
//           <p className="text-gray-600 mt-1">
//             {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} found
//           </p>
//         </div>
//         <Link to="/tasks/new" className="btn-primary flex items-center gap-2 justify-center">
//           <Plus className="h-5 w-5" />
//           New Task
//         </Link>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//         <div className="flex flex-col lg:flex-row gap-4">
//           {/* Search */}
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search tasks..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
//             />
//           </div>

//           {/* Filters */}
//           <div className="flex gap-3">
//             <div className="relative">
//               <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <select
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//                 className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white cursor-pointer"
//               >
//                 <option value="all">All Status</option>
//                 <option value={TASK_STATUS.TODO}>To Do</option>
//                 <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
//                 <option value={TASK_STATUS.DONE}>Done</option>
//               </select>
//             </div>

//             <select
//               value={filterPriority}
//               onChange={(e) => setFilterPriority(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white cursor-pointer"
//             >
//               <option value="all">All Priority</option>
//               <option value={TASK_PRIORITY.LOW}>Low</option>
//               <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
//               <option value={TASK_PRIORITY.HIGH}>High</option>
//             </select>

//             {/* View Toggle */}
//             <div className="flex bg-gray-100 rounded-lg p-1">
//               <button
//                 onClick={() => setView('kanban')}
//                 className={`px-3 py-1.5 rounded-md transition-colors ${
//                   view === 'kanban'
//                     ? 'bg-white text-primary-600 shadow-sm'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <LayoutGrid className="h-5 w-5" />
//               </button>
//               <button
//                 onClick={() => setView('list')}
//                 className={`px-3 py-1.5 rounded-md transition-colors ${
//                   view === 'list'
//                     ? 'bg-white text-primary-600 shadow-sm'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <List className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Task View */}
//       {view === 'kanban' ? (
//         <TaskKanban
//           tasks={filteredTasks}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//           onStatusChange={handleStatusChange}
//         />
//       ) : (
//         <TaskList
//           tasks={filteredTasks}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//           onStatusChange={handleStatusChange}
//         />
//       )}
//     </div>
//   );
// }
import React from 'react';

const TasksPage = () => {
    return (
        <div>
            faka
        </div>
    );
};

export default TasksPage;