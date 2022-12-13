import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as routerLink } from "react-router-dom";
import ucarsGround from "./imageHeader/UcarsGroup.png";

function Header2() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "#232323",
        display: { xs: "none", lg: "block" },
        width: { lg: "1366px" },
        height: "77px",
      }}
    >
      <Box
        sx={{
          padding: { xs: "8px 10px", lg: "19px 60px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="img" src={ucarsGround}></Box>

        <Box
          sx={{
            alignItems: "flex-start",
            padding: "0",
            gap: "46px",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Link
            to=""
            component={routerLink}
            sx={{
              fontSize: { xs: "10px", lg: "16px" },
              lineHeight: { xs: "19.36px", lg: "19px" },
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              fontStyle: "normal",
              fontFamily: "Inter",
              width: "75px",
              height: "19px",
            }}
          >
            New Cars
          </Link>
          <Link
            to=""
            component={routerLink}
            sx={{
              fontSize: { xs: "10px", lg: "16px" },
              lineHeight: { xs: "19.36px", lg: "19.36px" },
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              fontStyle: "normal",
              fontFamily: "Inter",
            }}
          >
            Used Cars
          </Link>
          <Link
            to=""
            component={routerLink}
            sx={{
              fontSize: { xs: "10px", lg: "16px" },
              lineHeight: { xs: "19.36px", lg: "19.36px" },
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              fontStyle: "normal",
              fontFamily: "Inter",
            }}
          >
            Reviews
          </Link>
          <Link
            to=""
            component={routerLink}
            sx={{
              fontSize: { xs: "10px", lg: "16px" },
              lineHeight: { xs: "19.36px", lg: "19.36px" },
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              fontStyle: "normal",
              fontFamily: "Inter",
            }}
          >
            News
          </Link>
        </Box>
        <Button
          sx={{
            fontSize: { xs: "8px", lg: "16px" },
            backgroundColor: "#EE1B24",
            borderRadius: "5px",
            color: "white",
            fontFamily: "Inter",
            fontStyle: "normal",
            lineHeight: "19px",
            fontWeight: 600,
            width: "179px",
            height: "40px",
            padding: { xs: "5px 25px", lg: "11px 68px" },
            ":hover": {
              backgroundColor: "white",
              color: "#EE1B24",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Header2;
