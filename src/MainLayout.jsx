import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../src/Sidebar";

const MainLayout = () => {
  return (
    <Stack direction="row">
      <Sidebar />

      <Box sx={{ p: "32px", flex: 1, height: "100vh" }}>
        <Outlet />
      </Box>
    </Stack>
  );
};
export default MainLayout;
