import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import locationIcon from "./imageIcon/ic_round-pin-drop.png";
import smartHouse from "./Rectangle/Smart house.png";
import Secure from "./Rectangle/Secure data protection with fingerprint and lock.png";

function HomePage2() {
  return (
    <Box
      sx={{
        backgroundColor: "#232323",
        width: { xs: "375px", lg: "1366px" },
        height: { xs: "1253px", lg: "810px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          gap: "7px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "32px", lg: "48px" },
            fontWeight: 700,
            color: "#EE1B24",
            lineHeight: { xs: "48px", lg: "72px" },
            fontFamily: "Poppins",
            fontStyle: "normal",
          }}
        >
          How it works.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", lg: "32px" },
            color: "#FFFFFF",
            lineHeight: { xs: "30px", lg: "48px" },
            fontFamily: "Poppins",
            fontStyle: "normal",
            textAlign: { xs: "center", lg: "right" },
          }}
        >
          This is how our products works
        </Typography>
      </Box>

      <Box
        sx={{
          padding: {
            xs: "19px",
            lg: "142px 96px 139px 96px",
          },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "flex-start",
          gap: { xs: "60px", lg: "80px" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "338px",
            height: { xs: "320px", lg: "351px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0",
            gap: "36px",
          }}
        >
          <img src={locationIcon} alt="" width="126px" height="126px" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0px",
              gap: "11px",
              width: "338px",
              height: { xs: "171px", lg: "189px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "24px", lg: "36px" },
                color: "white",
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: { xs: "36px", lg: "54px" },
                textAlign: "center",
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
                fontStyle: "normal",
                lineHeight: { xs: "24px", lg: "36px" },
                textAlign: "center",
                opacity: "0.8",
              }}
            >
              Our cars are located at prime areas where by there won’t be
              problem with transportation
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px",
            gap: "51px",
            width: "338px",
            height: { xs: "320px", lg: "380px" },
          }}
        >
          <img src={smartHouse} alt="" width="184px" height="140px" />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0px",
              gap: "11px",
              width: "338px",
              height: { xs: "171px", lg: "189px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "24px", lg: "36px" },
                color: "white",
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: { xs: "36px", lg: "54px" },
                textAlign: "center",
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
                fontStyle: "normal",
                lineHeight: { xs: "24px", lg: "36px" },
                textAlign: "center",
                opacity: "0.8",
              }}
            >
              Our estates comes with good network,portable water , 24hrs light
              and round the clock security.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px",
            gap: "51px",
            width: "338px",
            height: { xs: "320px", lg: "372px" },
          }}
        >
          <img src={Secure} alt="" width="141px" height="132px" />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0px",
              gap: "11px",
              width: "338px",
              height: { xs: "171px", lg: "189px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "24px", lg: "36px" },
                color: "white",
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: { xs: "36px", lg: "54px" },
                textAlign: "center",
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
                fontStyle: "normal",
                lineHeight: { xs: "24px", lg: "36px" },
                textAlign: "center",
                opacity: "0.8",
              }}
            >
              We have been in business for over 32 years,for client outside the
              country you can trust us to deliver well.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage2;
