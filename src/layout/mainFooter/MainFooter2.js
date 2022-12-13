import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ucarsGroup from "./imageFooter/UcarsGroup.png";

function MainFooter2() {
  return (
    <div>
      <Box sx={{ mb: "18px", display: { xs: "none", lg: "block" } }}>
        <Stack direction="row" spacing="4px">
          <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
            Advertising Terms and Conditions
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
            Platform Terms and Conditions
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
            Privacy Policy
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack
          direction="row"
          spacing="8px"
          sx={{ alignItems: { xs: "center", lg: "baseline" } }}
        >
          <img src={ucarsGroup} alt="" width="55.56px" height="16px" />
          <Typography
            sx={{ fontSize: { xs: "10px", lg: "14px" }, fontWeight: 400 }}
          >
            CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
            by UCARS Pte Ltd
          </Typography>
        </Stack>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#8C8C8C",
              display: { xs: "none", lg: "block" },
            }}
          >
            © 2022. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default MainFooter2;
