import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../UI/SideBar";
import Fab from "../UI/Fab";
import { auth } from "../../config/firebase";

const TasksLayout = () => {
  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="h-screen overflow-y-scroll">
      <SideBar />
      <div className="w-fit absolute z-50 bottom-6 right-6">
        <Fab />
      </div>
      <Outlet />
    </div>
  );
};

export default TasksLayout;
