import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { CircularProgress } from "@mui/material";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
const ProjectView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const id = location.pathname.split("/").pop();
  console.log(id);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const projectsRef = doc(db, "Projects", id);

    const unsub = onSnapshot(projectsRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setProject(data);
      } else {
        console.log("Document does not exist!");
      }
    });
    return () => unsub();
  }, [id]);
  console.log(project);

  return (
    <>
      {project !== null ? (
        <div className="bg-red-200 w-screen">
          <button onClick={goBack}>
            <ArrowLeftIcon width={20} color="#fff" />
          </button>
          Task title: {project.title}
        </div>
      ) : (
        <div>
          Loading project... <CircularProgress className="w-24" />
        </div>
      )}
    </>
  );
};

export default ProjectView;
