//context
import { StoreProjects } from "../context/ProjectsContext";

//hooks
import { useContext, useEffect, useState } from "react";
//componentes
import ProjectCard from "../components/ProjectCard";
import {Heading, Box} from '@chakra-ui/react';

const Search = () => {
  const [resultsSearch, setResultsSearch] = useState([]);

  const [
    projects,
    addProject,
    editProject,
    deleteProject,
    searchProject,
    searchProjects    
  ] = useContext(StoreProjects);

  useEffect(() => {
    setResultsSearch(searchProjects);
  }, [searchProjects]);

  return (
    <Box px={{base: 2, md: 8}} py={{base: 2, md: 4}}>
    <Box w="100%" m="auto" bg="#fff" boxShadow="lg" borderRadius="4px">
      {
        resultsSearch.length > 0 ? (
          resultsSearch.map((project) => <ProjectCard key={project.id} {...project} />)
        ) : <Heading textAlign="center" p={4}>Your search did not find results</Heading>
      }
    </Box>
    </Box>
  );
};
export default Search;
