import { Box } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import logo from "./imageHeader/CB Logo Black 1.png";
import { Typography } from "@mui/material";
import signal from "./imageHeader/Mobile Signal.png";
import wifi from "./imageHeader/Wifi.png";
import battery from "./imageHeader/Battery.png";

function MainHeader() {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: "11px 16px",
          width: "375px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "22px",
            color: "#232323",
          }}
        >
          9:40
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "row",
            gap: "5px",
            padding: "0px",
          }}
        >
          <Box component="img" src={signal} sx={{}} />
          <Box component="img" src={wifi} sx={{}} />
          <Box component="img" src={battery} sx={{}} />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          height: "64px",
          width: "375px",
          padding: "12px 16px",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 auto",
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
