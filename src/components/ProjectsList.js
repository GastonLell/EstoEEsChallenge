//context
import { StoreProjects } from "../context/ProjectsContext";
import { useContext } from "react";

//components
import { Text, SimpleGrid, Box, HStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const [projects] = useContext(StoreProjects);

  return (
    <Box w="100%" m="auto" bg="#fff">
      <SimpleGrid px={2} columns={5} spacingY="10px" spacingX="10px" border="1px" borderColor="gray.200" bg="bgGray.100" display={{base: "none", md: "grid"}}>
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
