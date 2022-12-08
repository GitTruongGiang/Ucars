import { Box, Popover, Radio, Stack, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

import React from "react";

function UserNewCars({ userNewCars, setUserNewCars }) {
  const [valueUserNewCars, setvalueUserNewCars] = React.useState("a");

  const handleChange = (event) => {
    setvalueUserNewCars(event.target.value);
  };

  const controlProps = (item) => ({
    checked: valueUserNewCars === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const handleClose = () => {
    setUserNewCars(null);
  };

  const open = Boolean(userNewCars);

  return (
    <Popover
      className="UserNewCars"
      open={open}
      anchorEl={userNewCars}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ height: "167px", width: "322px", padding: "23px 0 0 24px" }}>
        <Stack direction="row" spacing="8px" sx={{ alignItems: "center" }}>
          <Radio
            {...controlProps("c")}
            sx={{
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <Typography
            sx={{
              color: "#232323",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
              fontFamily: "Poppins",
            }}
          >
            New Car ( Authorised Dealer)
          </Typography>
        </Stack>

        <Stack direction="row" spacing="8px" sx={{ alignItems: "center" }}>
          <Radio
            {...controlProps("b")}
            sx={{
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <Typography
            sx={{
              color: "#232323",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
              fontFamily: "Poppins",
            }}
          >
            New Car ( Parallel Importer )
          </Typography>
        </Stack>

        <Stack direction="row" spacing="8px" sx={{ alignItems: "center" }}>
          <Radio
            {...controlProps("a")}
            sx={{
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <Typography
            sx={{
              color: "#232323",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
              fontFamily: "Poppins",
            }}
          >
            Used Cars
          </Typography>
        </Stack>
      </Box>
    </Popover>
  );
}

export default UserNewCars;
