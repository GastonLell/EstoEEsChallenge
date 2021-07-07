import { createContext, useState } from "react";

export const StoreProjects = createContext();

const ProjectsContext = ({ children }) => {

  const [projects, setProjects] = useState([]);

  const addProject = ({ project }) => {
    setProjects([...projects, project]);
  };

  const editProject = (id, edited) => {
    setProjects(projects.map(project => (project.id === id ? edited : project)))
  }

  const deleteProject = (id) => {
    const remainingProjects = projects.filter(project => project.id !== id);
    setProjects(remainingProjects);
  }
  
  return (
    <StoreProjects.Provider value={[projects, addProject, editProject, deleteProject]}>
      {children}
    </StoreProjects.Provider>
  );
};
export default ProjectsContext;
