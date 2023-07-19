import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ProjectsCategories from "./ProjectsCategories";

const savedDisplay = localStorage.getItem("displayStyle");

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [display, setDisplay] = useState(savedDisplay || true);

  useEffect(() => {
    const func = async () => {
      const projectsRef = collection(db, "Projects");
      const getProjects = query(
        projectsRef,
        where("creator", "==", auth.currentUser.uid),
        orderBy("createdAt")
      );
      const unsubscribe = onSnapshot(getProjects, (snap) => {
        let projectsArr = [];
        snap.forEach((doc) => {
          projectsArr.push({ ...doc.data(), id: doc.id });
        });
        setProjects([...projectsArr].reverse());
      });
      return () => unsubscribe();
    };

    func();
  }, []);

  return (
    <>
      <ProjectsCategories />
      <nav className="font-medium text-neutral-300">
        My Projects
        <button
          className="float-right"
          onClick={() => {
            setDisplay((prev) => !prev);
            localStorage.setItem("displayStyle", display);
          }}
        >
          Change Display
        </button>
      </nav>
      <div>
        <div
          className={`mt-4 border-t w-screen md:w-fit pt-2 grid ${
            display ? "grid-flow-row" : "grid-flow-col"
          } gap-1 group-hover:scale-50`}
        >
          {projects.length > 0 ? (
            <>
              {projects.map((project) => {
                return (
                  <div
                    className="bg-purple-50 rounded-xl w-full p-8 hover:bg-opacity-70 cursor-pointer duration-300"
                    key={project.id}
                  >
                    <Link state={project.id} to={`${project.id}`}>
                      {project.title}
                    </Link>
                  </div>
                );
              })}
            </>
          ) : (
            <div>
              Loading projects{" "}
              <div>
                <CircularProgress className="w-24" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
