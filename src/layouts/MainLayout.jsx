import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  const bg = useColorModeValue("#faf8f5", "#0f0f0f");

  return (
    <Box 
      minHeight="100vh"
      maxWidth="100vw" 
      overflowX="hidden"
      bg={bg}
      transition="background-color 0.3s ease"
    >
      <NavBar />
      <Flex direction="column" width="100%">
        <Outlet />
      </Flex>
    </Box>
  );
};

export default MainLayout;
