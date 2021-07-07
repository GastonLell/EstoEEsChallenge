import { Input, Button, Icon, Stack } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'

//context
import { StoreProjects } from "../context/ProjectsContext";

//hooks
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const SearchProject = () =>{
    const history = useHistory();

    const [projects, addProject, editProject, deleteProject, searchProject] = useContext(StoreProjects);

    const [textSearch, setTextSearch] = useState("")

    const handleChangeText = (e) => {
        setTextSearch(e.target.value);
    }
    
    const handleSearch = (e) => {
        e.preventDefault();
        searchProject(textSearch.toLowerCase().trim())
        history.push('/search')
    }
    
    return(
        <form onSubmit={handleSearch} style={{width: "100%", margin: "auto"}}>
        <Stack w="100%" m="auto" d="flex" direction="row" py={4} px={{base: 4, md: 10}} spacing={0}>
            <Input placeholder="Search project" onChange={handleChangeText} type="text" value={textSearch} name="text" borderRadius="4px 0 0 4px" size="sm" />
            <Button borderRadius="0 4px 4px 0" size="sm" type="submit">
                <Icon as={Search2Icon}/>
            </Button> 
        </Stack>
        </form>
    )
}
export default SearchProject;