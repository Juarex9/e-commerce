import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <Box minHeight="100vh" maxWidth="100vw" overflowX="hidden">
      <NavBar />
      <Flex direction="column" width="100%">
        <Outlet />
      </Flex>
    </Box>
  );
};

export default MainLayout; 