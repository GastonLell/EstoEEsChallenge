import {Box} from '@chakra-ui/react';

import HeaderForm from '../components/HeaderForm';
import EditProject from '../components/EditProject';

function Edit(){
    return(
        <Box>
            <HeaderForm text="Edit Project"/>
            <EditProject/>
        </Box>
    )
}
export default Edit;