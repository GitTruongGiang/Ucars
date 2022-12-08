import {
  Box,
  Button,
  Divider,
  Input,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as routerLink } from "react-router-dom";

import CarbuyerLogo from "./imageFooter/Carbuyer-Logo-2.png";
import locationIcon from "./imageFooter/Location-icon.png";
import callIcon from "./imageFooter/CallIcon.png";
import maillIcon from "./imageFooter/MaillIcon.png";
import instagramIcon from "./imageFooter/Instagram-icon.png";
import facebookIcon from "./imageFooter/Facebook-icon.png";
import telegramIcon from "./imageFooter/Telegram-icon.png";
import linkdinIcon from "./imageFooter/Linkdin-icon.png";
import youtubeIcon from "./imageFooter/Youtube-icon.png";
import ucarsGroup from "./imageFooter/UcarsGroup.png";

function MainFooter() {
  return (
    <Box component="div" sx={{ width: "1366px" }}>
      <Box sx={{ padding: "52px 113.83px 42px 113.83px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Box sx={{ mb: "16px", background: "url(CBcomsg.png)" }}>
              <img src={CarbuyerLogo} alt="" height="62px" width="299.76px" />
            </Box>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ mr: "9.66px" }}>
                  <img
                    src={locationIcon}
                    alt=""
                    height="16px"
                    width="15.18px"
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  71 Ayer Rajah Crescent, #06-14, Singapore 139951
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ mr: "9.66px" }}>
                  <img src={callIcon} alt="" height="16px" width="15.18px" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  +65 8808 7905
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ mr: "9.66px" }}>
                  <img src={maillIcon} alt="" height="16px" width="15.18px" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  hello@carbuyer.com.sg
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              component="div"
              sx={{ display: "flex", flexDirection: "column" }}
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
              <Stack spacing="12px">
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  About Us
                </Link>
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  Careers
                </Link>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Box
              component="div"
              sx={{ display: "flex", flexDirection: "column" }}
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
              <Stack spacing="12px">
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  Buy Used Cars
                </Link>
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  Buy New Cars
                </Link>
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  Be a Dealer with UCARS
                </Link>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Box
              component="div"
              sx={{ display: "flex", flexDirection: "column" }}
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
              <Stack spacing="12px">
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  News
                </Link>
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  Sell My Car
                </Link>
                <Link
                  component={routerLink}
                  to=""
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#5F5F5F",
                  }}
                >
                  COE Prices
                </Link>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: "#232323", mb: "12px" }}>
              Get the <span style={{ color: "#EE1B24" }}>latest</span>{" "}
              automotive news sent to your inbox!
            </Typography>
            <Box
              sx={{
                position: "relative",
                mb: "16px",
              }}
            >
              <TextField
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
                  fontSize: "14px",
                  lineHeight: "24px",
                  padding: "8px 16px 8px 16px",
                  position: "absolute",
                  left: "69%",
                  top: "0%",
                  height: "40px",
                }}
              >
                Subscribe
              </Button>
            </Box>

            <Box>
              <Box sx={{ display: "flex", alignContent: "center" }}>
                <Typography
                  sx={{ fontSize: "14px", lineHeight: "22px", mr: "7px" }}
                >
                  Follow us
                </Typography>
                <Stack direction="row" spacing="15px">
                  <img src={instagramIcon} alt="" height="20px" width="20px" />
                  <img src={facebookIcon} alt="" height="20px" width="20px" />
                  <img src={telegramIcon} alt="" height="20px" width="20px" />
                  <img src={linkdinIcon} alt="" height="20px" width="20px" />
                  <img src={youtubeIcon} alt="" height="20px" width="20px" />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ margin: "24px 0" }} />

        <Box sx={{ mb: "18px" }}>
          <Stack direction="row" spacing="4px">
            <Typography
              sx={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
            >
              Advertising Terms and Conditions
            </Typography>
            <Typography
              sx={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
            >
              Platform Terms and Conditions
            </Typography>
            <Typography
              sx={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
            >
              Privacy Policy
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="row" spacing="8px" sx={{ alignItems: "baseline" }}>
            <img src={ucarsGroup} alt="" width="55.56px" height="16px" />
            <Typography
              sx={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
            >
              CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
              by UCARS Pte Ltd
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: 400,
              color: "#8C8C8C",
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
