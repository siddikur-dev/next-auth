export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;

  if (diff < 60000) return 'Just now';
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }
  if (diff < 604800000) {
    const days = Math.floor(diff / 86400000);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getTaskStats = (tasks) => {
  return {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === 'TODO').length,
    inProgress: tasks.filter((t) => t.status === 'IN_PROGRESS').length,
    done: tasks.filter((t) => t.status === 'DONE').length,
    highPriority: tasks.filter((t) => t.priority === 'HIGH').length,
  };
};

export const getCompletionPercentage = (tasks) => {
  if (tasks.length === 0) return 0;
  const completed = tasks.filter((t) => t.status === 'DONE').length;
  return Math.round((completed / tasks.length) * 100);
};