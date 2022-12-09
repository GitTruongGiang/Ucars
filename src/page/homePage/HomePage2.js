import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import locationIcon from "./imageIcon/ic_round-pin-drop.png";
import smartHouse from "./Rectangle/Smart house.png";
import Secure from "./Rectangle/Secure data protection with fingerprint and lock.png";

function HomePage2() {
  return (
    <Box sx={{ backgroundColor: "#232323" }}>
      <Stack spacing="7px" sx={{ pt: "22px", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "36px", lg: "48px" },
            fontWeight: 700,
            color: "#EE1B24",
          }}
        >
          How it works.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", lg: "32px" },
            color: "#FFFFFF",
          }}
        >
          This is how our products works
        </Typography>
      </Stack>

      <Box
        sx={{
          padding: {
            xs: "40px 60px 40px 60px",
            lg: "142px 96px 139px 96px",
          },
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ textAlign: "center", width: "338px", mb: { xs: "60px" } }}>
          <Box sx={{ mb: { xs: "20px", lg: "46.5px" } }}>
            <img src={locationIcon} alt="" />
          </Box>
          <Stack spacing="11px">
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "24px", lg: "36px" },
                color: "white",
                fontFamily: "Poppins",
              }}
            >
              Find Car
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", lg: "24px" },
                color: "white",
                fontFamily: "Poppins",
              }}
            >
              Our cars are located at prime areas where by there won’t be
              problem with transportation
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ textAlign: "center", width: "338px", mb: { xs: "60px" } }}>
          <Box sx={{ mb: { xs: "20px", lg: "46.5px" } }}>
            <img src={smartHouse} alt="" />
          </Box>
          <Stack spacing="11px">
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "24px", lg: "36px" },
                lineHeight: "54px",
                color: "white",
                fontFamily: "Poppins",
              }}
            >
              Make payments
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", lg: "24px" },
                color: "white",
                fontFamily: "Poppins",
              }}
            >
              Our estates comes with good network,portable water , 24hrs light
              and round the clock security.
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ textAlign: "center", width: "338px" }}>
          <Box sx={{ mb: { xs: "20px", lg: "46.5px" } }}>
            <img src={Secure} alt="" />
          </Box>
          <Stack spacing="11px">
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "24px", lg: "36px" },
                color: "white",
                fontFamily: "Poppins",
              }}
            >
              Make it Official
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", lg: "24px" },
                color: "white",
                fontFamily: "Poppins",
              }}
            >
              We have been in business for over 32 years,for client outside the
              country you can trust us to deliver well.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage2;
