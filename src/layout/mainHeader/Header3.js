import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import carsBackgroud from "./imageHeader/cars-backgroud-1.png";

function Header3() {
  return (
    <Box
      className="carsBackgroud"
      sx={{
        position: "relative",
        backgroundSize: "cover",
        objectFit: "cover",
        width: { xs: "343px", lg: "1366px" },
        height: { xs: "142px", lg: "529px" },
        borderRadius: { xs: "5px", lg: "0" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "19.4px", lg: "97px" },
          left: { xs: "21.6px", lg: "108px" },
          width: { xs: "230px", lg: "540px" },
          height: { lg: "220px" },
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0",
          gap: { xs: "10px", lg: "32px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0",
            gap: { xs: "6px", lg: "16px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", lg: "60px" },
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: "Poppins",
              fontStyle: "normal",
              lineHeight: { xs: "20px", lg: "76px" },
            }}
          >
            Car Marketplace
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "8px", lg: "18px" },
              fontWeight: 400,
              lineHeight: { xs: "10px", lg: "22px" },
              fontStyle: "normal",
              color: "#FFFFFF",
              fontFamily: "Inter",
              width: { lg: "496px" },
              height: { lg: "44px" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: "#EE1B24",
            color: "white",
            width: { xs: "80px", lg: "196px" },
            height: { xs: "20px", lg: "52px" },
            borderRadius: { xs: "3px", lg: "8px" },
            fontSize: { xs: "6px", lg: "18px" },
            fontWeight: 600,
            lineHeight: "30px",
            fontStyle: "normal",
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
