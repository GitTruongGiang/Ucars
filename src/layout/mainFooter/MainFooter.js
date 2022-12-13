import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as routerLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import instagramIcon from "./imageFooter/Instagram-icon.png";
import facebookIcon from "./imageFooter/Facebook-icon.png";
import telegramIcon from "./imageFooter/Telegram-icon.png";
import linkdinIcon from "./imageFooter/Linkdin-icon.png";
import youtubeIcon from "./imageFooter/Youtube-icon.png";
import MainFooter1 from "./MainFooter1";
import MainFooter2 from "./MainFooter2";

function MainFooter() {
  return (
    <Box
      component="div"
      sx={{
        margin: { xs: "0px auto", lg: "0px" },
        width: { xs: "375px", lg: "1366px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: "22px", lg: "24px" },
        }}
      >
        <MainFooter1 />

        <MainFooter2 />

        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            backgroundColor: "#232323",
            height: "48px",
            width: "375px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#ffff",
              padding: "14px 0",
              margin: "0 auto",
              lineHeight: "20px",
              fontFamily: "Poppins",
              fontStyle: "normal",
            }}
          >
            © 2022. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MainFooter;
