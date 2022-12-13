import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function HomePage4() {
  return (
    <Box
      component="div"
      className="unsplash"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "80px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          left: { xs: "20px", lg: "80px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "335px", lg: "410px" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "186px", lg: "18px" },
            alignItems: "flex-start",
            padding: "0px",
          }}
        >
          <Box
            sx={{
              width: { xs: "246px", lg: "390px" },
              margin: "0 auto",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "48px", lg: "76px" },
                color: "white",
                fontFamily: "Poppins",
                textAlign: { xs: "center", lg: "start" },
                fontStyle: "normal",
                lineHeight: { xs: "72px", lg: "114px" },
              }}
            >
              Questions about buying or renting?
            </Typography>
          </Box>
          <Button
            sx={{
              width: { xs: "335px", lg: "410px" },
              height: "60px",
              padding: "16px 40px",
              borderRadius: "5px",
              backgroundColor: "#EE1B24",
              color: "white",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19px",
              fontFamily: "Roboto",
              fontStyle: "normal",

              ":hover": { backgroundColor: "white", color: "#EE1B24" },
            }}
          >
            Ask Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage4;
