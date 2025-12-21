import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from '../pages/HomePage';
import Root from '../components/layouts/Root';
import TasksPage from '../pages/TasksPage';
// import Layout from '../components/layout/Layout';
  // <Route path="/" element={<HomePage />} />
  //           <Route path="/tasks" element={<TasksPage />} />
  //           <Route path="/tasks/:id" element={<TaskDetailPage />} />
  //           <Route path="/tasks/new" element={<CreateTaskPage />} />
  //           <Route path="/about" element={<AboutPage />} />
  //           <Route path="*" element={<NotFoundPage />} />
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tasks",
        Component:TasksPage,
      },
    ],
  },
]);

export default router;