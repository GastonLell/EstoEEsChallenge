//context
import { StoreProjects } from "../context/ProjectsContext";
import { useContext, useState } from "react";

//components
import { Text, SimpleGrid, Box, HStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectsList = ({projectsSearch}) => {
  const [projects] = useContext(StoreProjects);

  const [ifSearch, setIfSearch] = useState(projectsSearch)

  return (
    /*ENCABEZADO DE LA TABLA */
    <Box w="100%" m="auto" bg="rgba(0, 0, 0, 0.02)" boxShadow="lg" borderRadius="4px">
      <SimpleGrid px={4} columns={5}  spacingY="10px" spacingX="10px" border="1px" borderColor="gray.200" bg="bgGray.100" display={{base: "none", md: "grid"}} borderRadius="4px">
        <HStack height="60px">
            <Text fontSize="14px">
                Project Info
            </Text>    
        </HStack>
        <HStack height="60px">
            <Text fontSize="14px">
                Project Manager
            </Text>    
        </HStack>
        <HStack height="60px">
            <Text fontSize="14px">
                Assigned to
            </Text>    
        </HStack>
        <HStack height="60px">
            <Text fontSize="14px">
                Status
            </Text>    
        </HStack>
        <HStack height="60px">
            <Text fontSize="14px">
                Actions
            </Text>    
        </HStack>
      </SimpleGrid>
      {/* EL COMPONENTE CAAMBIA DEPENDIENDO SI ES MOBILE O DESKTOP */}


      {projects.length !== 0 ? (
        projects.map((project) => <ProjectCard key={project.id} {...project} />)
      ) : (
        <Text h="100vh" fontFamily="body" textAlign="center" p={4}>
          No hay projectos pendientes
        </Text>
      )}
    </Box>
  );
};
export default ProjectsList;
