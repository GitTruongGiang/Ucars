import { Box, Button, Link, Stack } from "@mui/material";
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
      }}
    >
      <Box
        sx={{
          padding: { xs: "8px 10px", lg: "18px 60px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="img" src={ucarsGround}></Box>

        <Stack direction="row" spacing={{ xs: "10px", lg: "46px" }}>
          <Link
            to=""
            component={routerLink}
            sx={{
              fontSize: { xs: "10px", lg: "16px" },
              lineHeight: { xs: "19.36px", lg: "19.36px" },
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
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
            }}
          >
            News
          </Link>
        </Stack>
        <Button
          sx={{
            fontSize: { xs: "8px", lg: "16px" },
            backgroundColor: "#EE1B24",
            borderRadius: "5px",
            color: "white",
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
