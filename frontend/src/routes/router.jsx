import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from '../pages/HomePage';
// import TasksPage from '../pages/TasksPage';
import Root from '../components/layouts/Root';
// import Layout from '../components/layout/Layout';

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
        element: <p >Bangla </p>,
      },
    ],
  },
]);

export default router;