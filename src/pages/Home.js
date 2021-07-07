import {Link} from 'react-router-dom';

import { HStack, Button, Box, Image } from "@chakra-ui/react";

//mis componentes
import Title from "../components/Title";
import ProjectsList from "../components/ProjectsList";
import SearchProject from "../components/SearchProject";

//icono para boton agregar
import more from '../assets/more.svg'

function Home() {

  return (
    <Box>
      <HStack bg="#fff" h={{base: "50px", md: "56px"}} d="flex" direction="row" justifyContent="space-between" px={{base: 4, md: 10}} border="1px" borderColor="gray.200">

        <Title text="My proyects" />
        

        <Link to="/add">
          
          <Button variant="estoEs" fontFamily="body" fontWeight="400" fontSize="12px" h="32px" >
            <Image src={more} mr={2} />
            Add project
          </Button>

        </Link>

      </HStack>

      <Box  bg="#fff" mb={4} >
        <SearchProject />
      </Box>

      <Box bg="brandBG.50" px={{md: 10}}>

        <ProjectsList/>

      </Box>
    </Box>
  );
}
export default Home;
