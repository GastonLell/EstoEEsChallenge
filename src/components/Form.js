import React, { useState, useContext } from "react";
//para agregar fecha
import moment from "moment";
//id automatico
import { v4 as uuidv4 } from "uuid";
//tomar el parametro de url
import { useParams } from "react-router-dom";
//redireccionar
import { useHistory } from "react-router-dom";
//context
import { StoreProjects } from "../context/ProjectsContext";
//Componentes de Chakra
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  Alert
} from "@chakra-ui/react";

const Form = ({
  textButton,
  initialProject = {
    projectName: "",
    description: "",
    manager: "",
    assigned: "",
    status: "Enabled",
  },
}) => {
  //destructuring context
  const [projects, addProject, editProject, deleteProject] = useContext(StoreProjects);

  const history = useHistory();

  //tomando id de params para saber si tengo que editar o crear
  const {id} = useParams();

  //estado para mostrar errores si los campos no estan completos
  const [error, setError] = useState(false);

  //guardando estado inicial del formulario
  const [project, setProject] = useState(initialProject);

  //destructuring de proyectos
  const { projectName, description, manager, assigned, status } = project;

  //tomando valores de inputs
  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  //evento del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //si los campos no estan completos retorno la funcion
    if (
      projectName.trim() === "" ||
      description.trim() === "" ||
      manager.trim() === "" ||
      assigned.trim() === "" ||
      status.trim() === ""
    ) {
      setError(true);
      console.log("errrrorrrr");
      return;
    }
    //si el usuario completa bien el formulario ssacamos errores
    setError(false);

    //si tenemos id en params tenemos que editar un proyecto sino creamos un proyecto
    if(!!id){

      editProject(id, project)

      history.push('/')
    } else {

      project.id = uuidv4();

      project.date = moment().format("DD MM YYYY LT");
  
      addProject({ project }); 

      history.push('/')
    }
    //reiniciar formulario
    setProject({
      projectName: "",
      description: "",
      manager: "",
      assigned: "",
      status: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box bg="#fff" m="auto" px={{base: 4, md: 8}} py={8} w={{base: "100%", md: "664px"}}>
        
        <FormControl pb={4}>
          <FormLabel mb={0}>Project name</FormLabel>
          <Input
            onChange={handleChange}
            value={projectName}
            name="projectName"
            type="text"
          />
        </FormControl>

        <FormControl pb={4}>
          <FormLabel mb={0}>Description</FormLabel>
          <Input
            onChange={handleChange}
            value={description}
            name="description"
            type="text"
          />
        </FormControl>

        <FormControl pb={4}>
          <FormLabel mb={0}>Project manager</FormLabel>
          <Select
            onChange={handleChange}
            value={manager}
            name="manager"
            placeholder="Select a person"
          >
            <option value="Pepito Moreyra">Pepito Moreyra</option>
            <option value="Tamara Quiroga">Tamara Quiroga</option>
            <option value="Roberto Ponce">Roberto Ponce</option>
          </Select>
        </FormControl>

        <FormControl pb={4}>
          <FormLabel mb={0}>Assigned to</FormLabel>
          <Select
            onChange={handleChange}
            value={assigned}
            name="assigned"
            placeholder="Select a person"
          >
            <option value="Gastón Lell">Gastón Lell</option>
            <option value="Jose Rodrigez">Jose Rodrigez</option>
            <option value="Nahuel Quintero">Nahuel Quintero</option>
          </Select>
        </FormControl>

        <FormControl pb={4}>
          <FormLabel mb={0}>Status</FormLabel>
          <Select onChange={handleChange} value={status} name="status">
            <option selected value="Enabled">
              Enabled
            </option>
            <option value="Disabled">Disabled</option>
          </Select>
        </FormControl>
        <Button type="submit" variant="estoEs">
          {textButton}
        </Button>
      </Box>
      {
        error && (
          <Alert status="error">
            Please, complete all fields
          </Alert>
        )
      }
    </form>
  );
};
export default Form;
