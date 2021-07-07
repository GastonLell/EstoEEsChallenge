import { createContext, useState } from "react";

export const StoreProjects = createContext();

const ProjectsContext = ({ children }) => {

  const [projects, setProjects] = useState([]);
  const [searchProjects, setSearchProjects] = useState([]);

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
  const searchProject = (text) => {
    setSearchProjects([])
    const results = projects.filter(item => {
      if(item.projectName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(text) || 
        item.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(text) || 
        item.manager.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(text) || 
        item.assigned.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(text)){ 
        return item
      }
    })
    setSearchProjects(results)
  }
  return (
    <StoreProjects.Provider value={[projects, addProject, editProject, deleteProject, searchProject, searchProjects ]}>
      {children}
    </StoreProjects.Provider>
  );
};
export default ProjectsContext;
