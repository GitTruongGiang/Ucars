import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./mainFooter/MainFooter";
import MainHeader from "./mainHeader/MainHeader";

function MainLayout() {
  return (
    <Box component="div" sx={{ position: "relative" }}>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </Box>
  );
}

export default MainLayout;
