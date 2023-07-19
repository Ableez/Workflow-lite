import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Auth from "./components/Auth";
import Tasks from "./components/Tasks";
import Welcome from "./components/Welcome";
import TasksLayout from "./components/layouts/TasksLayout";
import ProjectView from "./components/ProjectView";
import Projects from "./components/Projects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route element={<Welcome />} index />
      <Route path="login" element={<Auth />} />
      <Route path="v1" element={<TasksLayout />}>
        <Route path={"tasks"} element={<Tasks />}>
          <Route index element={<Projects />} />
          <Route path=":task" element={<ProjectView />} />
        </Route>
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
