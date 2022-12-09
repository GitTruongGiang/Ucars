import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import carsBackgroud from "./imageHeader/cars-backgroud-1.png";

function Header3() {
  return (
    <Box
      className="carsBackgroud"
      sx={{
        position: "relative",
        display: { xs: "flex", lg: "block" },
        justifyContent: { xs: "center", lg: "flex-start" },
        backgroundSize: "cover",
        width: { xs: "343px", lg: "100%" },
        height: { xs: "142px", lg: "529px" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "19.4px", lg: "97px" },
          left: { xs: "21.6px", lg: "108px" },
        }}
      >
        <Stack spacing={{ xs: "3.2px", lg: "16px" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", lg: "60px" },
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: "Poppins",
            }}
          >
            Car Marketplace
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", lg: "18px" },
              fontWeight: 400,
              color: "#FFFFFF",
              fontFamily: "Inter",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Nunc odio in et, lectus sit lorem id integer.
          </Typography>
        </Stack>
        <Button
          sx={{
            backgroundColor: "#EE1B24",
            color: "white",
            padding: { xs: "4px 15px", lg: "11px 48px" },
            borderRadius: { xs: "3px", lg: "8px" },
            mt: { xs: "8px", lg: "32px" },
            fontSize: { xs: "8px", lg: "18px" },
            fontWeight: 600,
            fontFamily: "Inter",
            ":hover": {
              backgroundColor: "white",
              color: "#EE1B24",
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default Header3;
