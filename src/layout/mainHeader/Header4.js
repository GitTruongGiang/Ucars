import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PriceRange from "../../component/PriceRange";
import UserNewCars from "../../component/UserNewCars";
import VehicleType from "../../component/VehicleType";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import dolarIcon from "./imageHeader/Dolar-icon.png";

function Header4() {
  const [userNewCars, setUserNewCars] = React.useState(null);
  const [priceRange, setPriceRange] = React.useState(null);
  const [vehicleType, setVehicleType] = React.useState(null);

  const handleUserNewCars = (event) => {
    setUserNewCars(event.currentTarget);
  };

  const handlePriceRange = (event) => {
    setPriceRange(event.currentTarget);
  };

  const handleVehicleType = (event) => {
    setVehicleType(event.currentTarget);
  };
  return (
    <Box
      sx={{
        width: { xs: "349px", lg: "1242px" },
        backgroundColor: "#FFFFFF",
        position: { xs: "static", lg: "absolute" },
        left: { xs: "0", lg: "62px" },
        top: { xs: "0", lg: "618px" },
        borderRadius: "10px",
        border: " 1px solid #E3E3E3",
        boxShadow: "20px 20px 120px 15px rgba(0, 0, 0, 0.05)",
        margin: { xs: "0 auto", lg: "0" },
        padding: { xs: "0", lg: "0px 40px" },
        mt: { xs: "20px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          borderRadius: "10px 0 0 10px",
        }}
      >
        <Box
          component="div"
          sx={{
            position: "relative",
            padding: { xs: "10px 20px", lg: "10px 0" },
            width: { xs: "100%" },
          }}
          onClick={handleUserNewCars}
        >
          <Stack spacing="30px">
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#232323",
              }}
            >
              New/ Used
            </Typography>
            <Stack
              direction="row"
              sx={{ justifyContent: { xs: "space-between" } }}
            >
              <Typography
                sx={{
                  color: "#5F5F5F",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                New Cars
              </Typography>

              <KeyboardArrowDownIcon
                sx={{ padding: "0" }}
                onClick={handleUserNewCars}
              />
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", lg: "4px" },
            height: { xs: "1px", lg: "60px" },
            margin: { xs: "10px 0px", lg: "40px 40px" },
            backgroundColor: "#E3E3E3",
          }}
        />

        <Box
          component="div"
          onClick={handlePriceRange}
          sx={{
            padding: { xs: "10px 20px", lg: "10px 0" },
            width: { xs: "100%" },
          }}
        >
          <Stack spacing="30px">
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "19px",
                fontWeight: 500,
                color: "#232323",
              }}
            >
              Price Range
            </Typography>
            <Stack
              direction="row"
              spacing={{ xs: "0", lg: "78.92px" }}
              sx={{ justifyContent: { xs: "space-between" } }}
            >
              <Stack
                direction="row"
                spacing="18px"
                sx={{ alignItems: "center" }}
              >
                <Stack direction="row" spacing="8px">
                  <img src={dolarIcon} alt="" />
                  <Typography
                    sx={{
                      color: "#5F5F5F",
                      fontSize: "14px",
                      lineHeight: "16px",
                      fontWeight: 400,
                    }}
                  >
                    $10,0000
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    backgroundColor: "#5F5F5F",
                    width: "16px",
                    height: "0px",
                    border: "0.838476px solid #5F5F5F",
                    transform: "rotate(-180deg)",
                  }}
                />

                <Stack direction="row" spacing="8px">
                  <img src={dolarIcon} alt="" />
                  <Typography
                    sx={{
                      color: "#5F5F5F",
                      fontSize: "14px",
                      lineHeight: "16px",
                      fontWeight: 400,
                    }}
                  >
                    $100,0000
                  </Typography>
                </Stack>
              </Stack>

              <KeyboardArrowDownIcon
                sx={{ padding: "0" }}
                onClick={handlePriceRange}
              />
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", lg: "4px" },
            height: { xs: "1px", lg: "60px" },
            margin: { lg: "40px 40px" },
            backgroundColor: "#E3E3E3",
          }}
        />

        <Box
          component="div"
          onClick={handleVehicleType}
          sx={{
            padding: { xs: "10px 20px", lg: "10px 0" },
            width: { xs: "100%" },
          }}
        >
          <Stack spacing="30px">
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "19px",
                fontWeight: 500,
                color: "#232323",
              }}
            >
              Vehicle Type
            </Typography>

            <Stack
              direction="row"
              sx={{ justifyContent: { xs: "space-between" } }}
            >
              <Typography
                sx={{
                  color: "#5F5F5F",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: 400,
                }}
              >
                Duplex
              </Typography>
              <KeyboardArrowDownIcon
                sx={{ padding: "0" }}
                onClick={handleVehicleType}
              />
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", lg: "4px" },
            height: { xs: "1px", lg: "60px" },
            margin: { lg: "40px 40px" },
            backgroundColor: "#fff",
          }}
        />

        <Box
          sx={{
            marginLeft: { xs: "0", lg: "34px" },
            width: { xs: "100%" },
            textAlign: "center",
            padding: { xs: "10px", lg: "0" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: { xs: "100%", lg: "140px" },
              height: "60px",
              borderRadius: "5px",
              backgroundColor: "#EE1B24",
              color: "white",
              ":hover": { backgroundColor: "white", color: "#EE1B24" },
            }}
          >
            Search
          </Button>
        </Box>
      </Box>

      <UserNewCars userNewCars={userNewCars} setUserNewCars={setUserNewCars} />
      <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
      <VehicleType vehicleType={vehicleType} setVehicleType={setVehicleType} />
    </Box>
  );
}

export default Header4;
