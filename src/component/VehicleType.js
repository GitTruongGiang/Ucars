import {
  Box,
  Button,
  Checkbox,
  Grid,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function VehicleType({ vehicleType, setVehicleType }) {
  const handleClose = () => {
    setVehicleType(null);
  };

  const vehicleTypeArray = [
    "Bus",
    "Lorry",
    "SUV",
    "Classic Car",
    "MPV",
    "Truck",
    "Coupe",
    "Pickup",
    "Van (Passenger)",
    "Convertible",
    "Sedan",
    "Van (Goods)",
    "Hatchback",
    "Sport Car",
    "Wagon",
  ];

  const open = Boolean(vehicleType);
  return (
    <Popover
      className="vehicleType"
      open={open}
      anchorEl={vehicleType}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ height: "350px", width: "473px", padding: "24px" }}>
        <Stack spacing="16px">
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Poppins",
              color: "#232323",
            }}
          >
            Vehicle Type
          </Typography>
          <Box>
            <Grid container spacing={1.5}>
              {vehicleTypeArray.map((type) => (
                <Grid item xs={4} key={type}>
                  <Stack
                    direction="row"
                    spacing="8px"
                    sx={{ alignItems: "center" }}
                  >
                    <Checkbox sx={{ padding: "0" }} />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "22px",
                        fontFamily: "Poppins",
                        color: "#232323",
                      }}
                    >
                      {type}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>

        <Box
          sx={{
            height: "1px",
            backgroundColor: "#E3E3E3",
            width: "100%",
            margin: "24px 0",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              color: "#B4B4B4",
            }}
          >
            Clear
          </Button>
          <Button
            sx={{
              backgroundColor: "#EE1B24",
              color: "white",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              width: "73px",
              height: "40px",
              ":hover": {
                backgroundColor: "white",
                color: "#EE1B24",
                border: "1px solid #EE1B24",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Popover>
  );
}

export default VehicleType;
