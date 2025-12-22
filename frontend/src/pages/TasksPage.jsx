import { useState } from "react";
import { Link } from "react-router"; // Using react-router as requested
import { 
  Plus, 
  LayoutGrid, 
  List, 
  Search, 
  Filter, 
  SlidersHorizontal,
  ChevronDown 
} from "lucide-react";
import { useTasks } from "../hooks/useTasks";
import { useUser } from "../context/UserContext";
import TaskList from "../components/TaskList";
import TaskKanban from "../components/task/TaskKanban";
import TaskStats from "../components/task/TaskStats";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import { TASK_STATUS, TASK_PRIORITY } from "../utils/constants";

export default function TasksPage() {
  const { user } = useUser();
  const [view, setView] = useState("kanban");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");

  const { tasks, isLoading, error, updateTask, deleteTask } = useTasks(user?._id);

  // Optimized Filter Logic
  const filteredTasks = tasks?.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || task.status === filterStatus;
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  }) || [];

  const handleStatusChange = (taskId, newStatus) => updateTask({ id: taskId, status: newStatus });
  const handleEdit = (taskData) => updateTask(taskData);
  const handleDelete = (taskId) => {
      deleteTask(taskId);
  };

  if (isLoading) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <Spinner size="lg" className="text-blue-600" />
      <p className="text-slate-500 animate-pulse font-medium">Syncing your tasks...</p>
    </div>
  );

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 p-4 md:p-8 animate-in fade-in duration-500">
      
      {/* 1. Analytics Section */}
      <section>
        <TaskStats tasks={tasks} />
      </section>

      {/* 2. Header & Action Bar */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Project Board</h1>
          <p className="text-slate-500 font-medium">
            You have <span className="text-blue-600 font-bold">{filteredTasks.length}</span> active {filteredTasks.length === 1 ? 'task' : 'tasks'}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* View Switcher */}
          <div className="flex bg-slate-200/50 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setView("kanban")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                view === "kanban" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <LayoutGrid size={18} />
              <span className="hidden md:block">Kanban</span>
            </button>
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                view === "list" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <List size={18} />
              <span className="hidden md:block">List</span>
            </button>
          </div>

          <Link
            to="/tasks/new"
            className="btn"
          >
            <Plus size={20} strokeWidth={3} />
            Create New
          </Link>
        </div>
      </header>

      {/* 3. Filter & Search Bar */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex flex-col xl:flex-row gap-5">
          {/* Enhanced Search */}
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by task title, description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
            />
          </div>

          {/* Filters Group */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 mr-2">
              <SlidersHorizontal size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Filters</span>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-semibold text-slate-700 cursor-pointer hover:border-slate-300 transition-all"
              >
                <option value="all">All Statuses</option>
                <option value={TASK_STATUS.TODO}>Pending</option>
                <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
                <option value={TASK_STATUS.DONE}>Completed</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Priority Filter */}
            <div className="relative">
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-semibold text-slate-700 cursor-pointer hover:border-slate-300 transition-all"
              >
                <option value="all">All Priorities</option>
                <option value={TASK_PRIORITY.LOW}>Low Priority</option>
                <option value={TASK_PRIORITY.MEDIUM}>Medium Priority</option>
                <option value={TASK_PRIORITY.HIGH}>High Priority</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Dynamic Board/List View */}
      <main className="min-h-[400px]">
        {filteredTasks.length > 0 ? (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            {view === "kanban" ? (
              <TaskKanban
                tasks={filteredTasks}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onStatusChange={handleStatusChange}
              />
            ) : (
              <TaskList
                tasks={filteredTasks}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onStatusChange={handleStatusChange}
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="bg-slate-50 p-6 rounded-full mb-4">
              <Search size={48} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No tasks matched your search</h3>
            <p className="text-slate-500 mt-2 text-center max-w-xs">
              Try adjusting your filters or search keywords to find what you're looking for.
            </p>
            <button 
              onClick={() => {setSearchQuery(""); setFilterStatus("all"); setFilterPriority("all");}}
              className="mt-6 text-blue-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}