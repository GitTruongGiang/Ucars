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
      </Box>
    </Box>
  );
}

export default MainFooter;
