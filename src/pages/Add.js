import {Box} from '@chakra-ui/react';

import AddProject from "../components/AddProject";
import HeaderForm from '../components/HeaderForm'

function Add(){
    return(
        <Box>  
            <HeaderForm text="Add Project"/>
            <AddProject/>
        </Box>
    )
}
export default Add;