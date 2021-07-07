
//context
import { StoreProjects } from "../context/ProjectsContext";
//hooks
import { useContext } from "react";
import { useParams } from "react-router-dom";

//componentes
import { Box } from "@chakra-ui/layout";
import Form from "./Form";

const EditProject = () => {
  //obteniendo los proyectos de context
  const [projects] = useContext(StoreProjects);

  //obtener el id del proyectto a editar
  const { id } = useParams();

  //buscando el estado inicial que tendran los inputs para poder editar
  const initialProject = projects.find(item => item.id === id)

  return (
    <Box my={{base: 4, md: 6}}>
      <Form textButton="Save changes" initialProject={initialProject} />
    </Box>
  );
};
export default EditProject;
