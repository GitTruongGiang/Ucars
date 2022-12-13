import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

function Header1() {
  return (
    <Box
      sx={{
        padding: { xs: "7px 10px", lg: "11px 60px" },
        display: { xs: "none", lg: "block" },
        width: { lg: "1366px" },
        height: { lg: "72px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: 0,
            gap: "23px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "0",
              gap: "8px",
            }}
          >
            <PinDropIcon
              sx={{
                height: { xs: "10px", lg: "20px" },
                width: { xs: "10px", lg: "20px" },
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "8px", lg: "12px" },
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#232323",
              }}
            >
              71 Ayer Rajah Crescent, #06-14, <br /> Singapore 139951
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#E3E3E3",
              width: "50px",
              height: "1px",
              margin: { xs: "0 10px", lg: "0 23px" },
              transform: "rotate(-90deg)",
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "0",
              gap: "8px",
            }}
          >
            <EmailIcon
              sx={{
                height: { xs: "10px", lg: "20px" },
                width: { xs: "10px", lg: "20px" },
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "8px", lg: "12px" },
                fontFamily: "Poppins",
                fontStyle: "normal",
              }}
            >
              Email us at: <br /> hello@carbuyer.com.sg
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0",
            gap: "8px",
          }}
        >
          <CallIcon
            sx={{
              height: { xs: "10px", lg: "20px" },
              width: { xs: "10px", lg: "20px" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "8px", lg: "12px" },
              lineHeight: { xs: "10px", lg: "20px" },
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            +65 8808 7905 <br /> +7 (700) 51 51 518
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header1;
