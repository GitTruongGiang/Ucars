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
          }}
        >
          <Stack direction="row" spacing={{ xs: "8px", lg: "12px" }}>
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
              }}
            >
              71 Ayer Rajah Crescent, #06-14, <br /> Singapore 139951
            </Typography>
          </Stack>

          <Box
            sx={{
              backgroundColor: "#E3E3E3",
              width: "1px",
              height: { xs: "30px", lg: "50px" },
              margin: { xs: "0 10px", lg: "0 23px" },
            }}
          ></Box>

          <Stack direction="row" spacing="12px">
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
              }}
            >
              Email us at: <br /> hello@carbuyer.com.sg
            </Typography>
          </Stack>
        </Box>

        <Stack direction="row" spacing="12px">
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
            }}
          >
            +65 8808 7905 <br /> +7 (700) 51 51 518
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Header1;
