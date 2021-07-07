//Context
import {StoreProjects} from '../context/ProjectsContext';
import { useContext } from "react";
//Componentes
import { Box } from "@chakra-ui/layout";
import Form from "./Form";

const AddProject = () => {
    const [addProject] = useContext(StoreProjects);

    return(
        <Box my={{base: 4, md: 6}}>
            <Form textButton="Create Project" addProject={addProject}/>
        </Box>
    )
}
export default AddProject;