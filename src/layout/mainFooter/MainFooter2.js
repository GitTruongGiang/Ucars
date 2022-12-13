import { Box, Stack, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import React from "react";
import ucarsGroup from "./imageFooter/UcarsGroup.png";

function MainFooter2() {
  return (
    <Box
      sx={{
        padding: { xs: "0px 16px 0px 16px", lg: "0px 113.38px 42px 113.38px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: { xs: "343px", lg: "1138.38px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            padding: "0px",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "0px",
              gap: "4px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: "22px",
                color: "#232323",
              }}
            >
              Advertising Terms and Conditions
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: "22px",
                color: "#232323",
              }}
            >
              Platform Terms and Conditions
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: "22px",
                color: "#232323",
              }}
            >
              Privacy Policy
            </Typography>
          </Box>

          <Box
            sx={{
              alignItems: { xs: "center", lg: "flex-start" },
              display: "flex",
              flexDirection: "row",
              gap: "7.59px",
              padding: "0px",
            }}
          >
            <Box
              component="img"
              src={ucarsGroup}
              sx={{
                width: { xs: "58.65px", lg: "55.63px" },
                height: "16.04px",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "10px", lg: "12px" },
                fontWeight: 400,
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: "20px",
                color: "#5F5F5F",
                width: { xs: "276px", lg: "534px" },
                textAlign: { xs: "center", lg: "start" },
              }}
            >
              CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
              by UCARS Pte Ltd
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#8C8C8C",
            display: { xs: "none", lg: "flex" },
            lineHeight: "22px",
            fontFamily: "Poppins",
            fontStyle: "normal",
          }}
        >
          © 2022. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default MainFooter2;
