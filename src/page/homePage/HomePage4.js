import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function HomePage4() {
  return (
    <Box component="div" className="unsplash" sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          left: { xs: "20px", lg: "80px" },
        }}
      >
        <Stack
          spacing={{ xs: "206px", lg: "18px" }}
          sx={{ width: { xs: "335px", lg: "410px" } }}
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
              }}
            >
              Questions about buying or renting?
            </Typography>
          </Box>
          <Button
            sx={{
              width: "100%",
              height: "60px",
              borderRadius: "5px",
              backgroundColor: "#EE1B24",
              color: "white",
              fontSize: "16px",
              fontWeight: 700,
              ":hover": { backgroundColor: "white", color: "#EE1B24" },
            }}
          >
            Ask Us
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default HomePage4;
