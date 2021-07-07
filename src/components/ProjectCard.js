import { Stack, HStack, Heading, Text, Avatar, Box, SimpleGrid, Tag } from "@chakra-ui/react";
import MenuCard from './MenuCard';

const ProjectCard = ({projectName, manager, assigned, date, id, status}) => {

    return(
        <>
        {/* MOBILE */}
        <Box bg="#fff" w="100%" h="auto" d={{base: "flex", md: "none"}} direction="row" justifyContent="space-between" px="16px" py="8px" border="1px" borderColor="gray.200">

            <Stack d="flex" direction={{base: "column", md: "row"}} justifyContent={{base: "center", md: "space-around"}}>

                <Heading fontFamily="title" fontSize={{base: "14px"}}  >
                    {projectName}
                </Heading>

                <Text fontSize={{base: "10px"}} color="gray.500" style={{'margin-top': "0px"}}>
                    Creation date: {date}
                </Text>

                <Stack d="flex" direction="row">

                    <Avatar src="https://bit.ly/dan-abramov" w="24px" h="24px" />
                    <Text fontSize={{base: "12px"}}>{assigned}</Text>

                </Stack>
            </Stack>

            <Stack>
                <MenuCard id={id}/>
            </Stack>
        </Box>
        
        {/* DESKTOP */}
        <SimpleGrid  bg="#fff" border="1px" borderColor="gray.100" columns={5} spacingY="10px" spacingX="10px" p={4} d={{base: "none", md: "grid"}}>
            <HStack height="60px">
                <Box>
                    <Text fontSize="14px">{projectName}</Text>
                    <Text  fontSize="12px"> Creation date: {date}</Text>
                </Box>
            </HStack>

            <HStack height="60px">
                <Stack d="flex" direction="row">
                    <Avatar src="https://bit.ly/dan-abramov" w="24px" h="24px" />
                    <Text fontSize="14px">{manager}</Text>
                </Stack>
            </HStack>

            <HStack height="60px">

              <Stack d="flex" direction="row">

                <Avatar src="https://bit.ly/sage-adebayo" w="24px" h="24px" />
                <Text fontSize={{base: "12px"}}>{assigned}</Text>

              </Stack>                

            </HStack>
            <HStack height="60px">
            <Tag>{status}</Tag>
            </HStack>

            <HStack height="60px">
            <MenuCard id={id}/>
            </HStack>
      </SimpleGrid>
        </>
    )
}
export default ProjectCard;
