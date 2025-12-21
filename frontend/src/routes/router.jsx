import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import Root from "../components/layouts/Root";
import TasksPage from "../pages/TasksPage";
import NotFoundPage from "../pages/NotFoundPage";
import TaskDetailPage from "../pages/TaskDetailPage";
import CreateTaskPage from "../pages/CreateTaskPage";
import AboutPage from "../pages/AboutPage";

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
        Component: TasksPage,
      },
      {
        path: "/tasks",
        Component: TasksPage,
      },
      {
        path: "/tasks/:id",
        Component: TaskDetailPage,
      },
      {
        path: "/tasks/:id",
        Component: TaskDetailPage,
      },
      {
        path: "/tasks/new",
        Component: CreateTaskPage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default router;
