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
        mt: { xs: "20px", lg: "0" },
        width: { xs: "375px", lg: "1366px" },
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "16px 16px",
            lg: "52px 113.83px 42px 113.83px",
          },
        }}
      >
        <MainFooter1 />

        <Stack
          spacing="16px"
          sx={{
            display: { xs: "flex", lg: "none" },
          }}
        >
          <Box
            component="div"
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              component={routerLink}
              to=""
              sx={{
                textDecoration: "none",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "black",
                mb: "8px",
              }}
            >
              About
            </Link>
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            component="div"
            sx={{
              display: { xs: "block", lg: "none" },
              backgroundColor: { xs: "#F1F2F5", lg: "" },
              height: { xs: "1px", lg: "0" },
              width: { xs: "100%", lg: "0" },
              borderRadius: { xs: "1px solid #F1F2F5", lg: "" },
            }}
          />

          <Box
            component="div"
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              component={routerLink}
              to=""
              sx={{
                textDecoration: "none",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "black",
                mb: "8px",
              }}
            >
              Services
            </Link>
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            component="div"
            sx={{
              display: { xs: "block", lg: "none" },
              backgroundColor: { xs: "#F1F2F5", lg: "" },
              height: { xs: "1px", lg: "0" },
              width: { xs: "100%", lg: "0" },
              borderRadius: { xs: "1px solid #F1F2F5", lg: "" },
            }}
          />

          <Box
            component="div"
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              component={routerLink}
              to=""
              sx={{
                textDecoration: "none",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "black",
                mb: "8px",
              }}
            >
              Resources
            </Link>
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            component="div"
            sx={{
              display: { xs: "block", lg: "none" },
              backgroundColor: { xs: "#F1F2F5", lg: "" },
              height: { xs: "1px", lg: "0" },
              width: { xs: "100%", lg: "0" },
              borderRadius: { xs: "1px solid #F1F2F5", lg: "" },
            }}
          />

          <Box
            component="div"
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              component={routerLink}
              to=""
              sx={{
                textDecoration: "none",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "black",
                mb: "8px",
              }}
            >
              Legal
            </Link>
            <KeyboardArrowDownIcon />
          </Box>
        </Stack>

        <Divider sx={{ margin: "24px 0" }} />

        <Box sx={{ display: { xs: "block", lg: "none" }, mb: "20px" }}>
          <Typography sx={{ color: "#232323", mb: "12px", fontSize: "12px" }}>
            Get the <span style={{ color: "#EE1B24" }}>latest</span> automotive
            news sent to your inbox!
          </Typography>
          <Box
            sx={{
              position: "relative",
              mb: "16px",
            }}
          >
            <TextField
              className="sub"
              size="small"
              sx={{
                width: "253.28px",
                height: "38px",
                border: " 1px 1px 1px 1px solid #F1F1F1",
                borderRadius: "5px 0px 0px 5px",
              }}
              label="Enter your email"
            ></TextField>
            <Button
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#EE1B24",
                borderRadius: "0px 5px 5px 0px ",
                fontWeight: 600,
                fontSize: "12px",
                padding: "8px 16px",
                position: "absolute",
                left: { xs: "67%", lg: "67%" },
                top: "0%",
                height: "38px",
                width: "104px",
              }}
            >
              Subscribe
            </Button>
          </Box>

          <Box>
            <Box sx={{ display: "flex", alignContent: "center" }}>
              <Typography
                sx={{ fontSize: "14px", mr: { xs: "36px", lg: "7px" } }}
              >
                Follow us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <img src={instagramIcon} alt="" height="20px" width="20px" />
                <img src={facebookIcon} alt="" height="20px" width="20px" />
                <img src={telegramIcon} alt="" height="20px" width="20px" />
                <img src={linkdinIcon} alt="" height="20px" width="20px" />
                <img src={youtubeIcon} alt="" height="20px" width="20px" />
              </Box>
            </Box>
          </Box>
        </Box>

        <MainFooter2 />
      </Box>

      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          backgroundColor: "#232323",
          height: "48px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#8C8C8C",
            padding: "14px 0",
            margin: "0 auto",
          }}
        >
          © 2022. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default MainFooter;
