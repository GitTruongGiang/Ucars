import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import logo from "./imageHeader/CB Logo Black 1.png";

function MainHeader() {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          backgroundColor: "#fff",
          height: "64px",
          padding: "12px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box component="img" src={logo}></Box>
        <SearchIcon />
      </Box>

      <Header1 />

      <Header2 />

      <Header3 />

      <Header4 />
    </Box>
  );
}

export default MainHeader;
