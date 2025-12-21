export const TASK_STATUS = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

export const TASK_PRIORITY = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
};

export const STATUS_CONFIG = {
  TODO: {
    label: 'To Do',
    color: 'bg-gray-200 text-gray-800',
    dotColor: 'bg-gray-500',
  },
  IN_PROGRESS: {
    label: 'In Progress',
    color: 'bg-blue-200 text-blue-800',
    dotColor: 'bg-blue-500',
  },
  DONE: {
    label: 'Done',
    color: 'bg-green-200 text-green-800',
    dotColor: 'bg-green-500',
  },
};

export const PRIORITY_CONFIG = {
  LOW: {
    label: 'Low',
    color: 'text-green-600',
    borderColor: 'border-green-500',
  },
  MEDIUM: {
    label: 'Medium',
    color: 'text-yellow-600',
    borderColor: 'border-yellow-500',
  },
  HIGH: {
    label: 'High',
    color: 'text-red-600',
    borderColor: 'border-red-500',
  },
};