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

import CarbuyerLogo from "./imageFooter/Carbuyer-Logo-2.png";
import locationIcon from "./imageFooter/Location-icon.png";
import callIcon from "./imageFooter/CallIcon.png";
import maillIcon from "./imageFooter/MaillIcon.png";
import instagramIcon from "./imageFooter/Instagram-icon.png";
import facebookIcon from "./imageFooter/Facebook-icon.png";
import telegramIcon from "./imageFooter/Telegram-icon.png";
import linkdinIcon from "./imageFooter/Linkdin-icon.png";
import youtubeIcon from "./imageFooter/Youtube-icon.png";

function MainFooter1() {
  return (
    <Box
      sx={{
        padding: { xs: "16px 16px 0px 16px", lg: "52px 113.83px 0px 113.83px" },
        width: { xs: "375px", lg: "1366px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: { xs: "16px", lg: "24px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: { xs: "16px", lg: "0px" },
          alignItems: { xs: "unset", lg: "center" },
          width: { xs: "343px", lg: "1138.33px" },
        }}
      >
        <Box>
          <Box sx={{ mb: "16px" }}>
            <img
              className="CarbuyerLogo"
              src={CarbuyerLogo}
              alt=""
              height="62px"
              width="299.76px"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "7.59px",
              }}
            >
              <Box>
                <img
                  className="locationIcon"
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
                  fontFamily: "Poppins",
                }}
              >
                71 Ayer Rajah Crescent, #06-14, Singapore 139951
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-between", lg: "flex-start" },
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "7.59px",
              }}
            >
              <Box>
                <img src={callIcon} alt="" height="16px" width="15.18px" />
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  width: { xs: "318px", lg: "292px" },
                  textAlign: { xs: "center", lg: "start" },
                }}
              >
                +65 8808 7905
              </Typography>
              <Box component="div"></Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-between", lg: "flex-start" },
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "7.59px",
              }}
            >
              <Box>
                <img src={maillIcon} alt="" height="16px" width="15.18px" />
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  width: { xs: "318px", lg: "142px" },
                  textAlign: "center",
                }}
              >
                hello@carbuyer.com.sg
              </Typography>
              <Box component="div"></Box>
            </Box>
          </Box>
        </Box>

        <Box
          component="div"
          sx={{
            display: { xs: "flex", lg: "none" },
            backgroundColor: { xs: "#F1F2F5", lg: "" },
            height: { xs: "1px", lg: "0" },
            width: { xs: "343px", lg: "0" },
            borderRadius: { xs: "1px solid #F1F2F5", lg: "" },
          }}
        />

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "row", lg: "column" },
            alignItems: "flex-start",
            width: { sx: "343px", lg: "82px" },
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
              fontFamily: "Poppins",
            }}
          >
            About
          </Link>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              padding: "0px",
            }}
          >
            <Link
              component={routerLink}
              to=""
              sx={{
                textDecoration: "none",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 400,
                color: "#5F5F5F",
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
              }}
            >
              Careers
            </Link>
          </Box>
          <KeyboardArrowDownIcon sx={{ display: { xs: "flex", lg: "none" } }} />
        </Box>

        <Box
          component="div"
          sx={{
            display: { xs: "flex", lg: "none" },
            backgroundColor: { xs: "#F1F2F5", lg: "" },
            height: { xs: "1px", lg: "0" },
            width: { xs: "343px", lg: "0" },
            borderRadius: { xs: "1px solid #F1F2F5", lg: "" },
          }}
        />

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "row", lg: "column" },
            alignItems: "flex-start",
            width: { sx: "343px", lg: "163px" },
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
              fontFamily: "Poppins",
            }}
          >
            Services
          </Link>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              padding: "0px",
            }}
          >
            <Link
              component={routerLink}
              to=""
              sx={{
                textDecoration: "none",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 400,
                color: "#5F5F5F",
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
              }}
            >
              Be a Dealer with UCARS
            </Link>
          </Box>
          <KeyboardArrowDownIcon sx={{ display: { xs: "flex", lg: "none" } }} />
        </Box>

        <Box
          component="div"
          sx={{
            display: { xs: "flex", lg: "none" },
            backgroundColor: { xs: "#F1F2F5", lg: "" },
            height: { xs: "1px", lg: "0" },
            width: { xs: "343px", lg: "0" },
            borderRadius: { xs: "1px solid #F1F2F5", lg: "" },
          }}
        />

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "row", lg: "column" },
            alignItems: "flex-start",
            width: { sx: "343px", lg: "85px" },
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
              fontFamily: "Poppins",
            }}
          >
            Resources
          </Link>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              padding: "0px",
            }}
          >
            <Link
              component={routerLink}
              to=""
              sx={{
                textDecoration: "none",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 400,
                color: "#5F5F5F",
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
              }}
            >
              COE Prices
            </Link>
          </Box>
          <KeyboardArrowDownIcon sx={{ display: { xs: "flex", lg: "none" } }} />
        </Box>

        <Box
          component="div"
          sx={{
            display: { xs: "flex", lg: "none" },
            backgroundColor: { xs: "#F1F2F5", lg: "" },
            height: { xs: "1px", lg: "0" },
            width: { xs: "343px", lg: "0" },
            borderRadius: { xs: "1px solid #F1F2F5", lg: "" },
          }}
        />

        <Box
          component="div"
          sx={{
            display: { xs: "flex", lg: "none" },
            flexDirection: { xs: "row", lg: "column" },
            alignItems: "flex-start",
            width: { sx: "343px", lg: "85px" },
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
              fontFamily: "Poppins",
            }}
          >
            Legal
          </Link>
          <KeyboardArrowDownIcon sx={{ display: { xs: "flex", lg: "none" } }} />
        </Box>

        <Box
          component="div"
          sx={{
            display: { xs: "flex", lg: "none" },
            backgroundColor: { xs: "#F1F2F5", lg: "" },
            height: { xs: "1px", lg: "0" },
            width: { xs: "343px", lg: "0" },
            borderRadius: { xs: "1px solid #F1F2F5", lg: "" },
          }}
        />

        <Box>
          <Typography
            sx={{
              color: "#232323",
              mb: { xs: "8px", lg: "12px" },
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontSize: { xs: "12px", lg: "14px" },
              lineHeight: "22px",
              fontWeight: 400,
            }}
          >
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
              size="small"
              sx={{
                border: " 1px 1px 1px 1px solid #F1F1F1",
                borderRadius: "5px 0px 0px 5px",
              }}
              label="Enter your email"
            ></TextField>
            <Box sx={{ position: "absolute", left: "69.25%", top: "0%" }}>
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
                  height: "40px",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "0px",
                gap: { xs: "36px", lg: "7.67px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontStyle: "normal",
                }}
              >
                Follow us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "0px",
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
      </Box>

      <Divider
        sx={{
          margin: "0px auto",
          width: { xs: "343px", lg: "1138.33px" },
          height: "5px",
          display: { xs: "none", lg: "flex" },
        }}
      />
    </Box>
  );
}

export default MainFooter1;
