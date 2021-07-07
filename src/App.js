import React from "react";

import Router from "./router";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/Theme";
import ProjectsContext from "./context/ProjectsContext";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProjectsContext>
        <Box bg="brandBG.50" h="100vh">
          <Router />
        </Box>
      </ProjectsContext>
    </ChakraProvider>
  );
}

export default App;
