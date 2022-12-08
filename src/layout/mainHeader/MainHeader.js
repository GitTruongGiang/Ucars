import {
  Button,
  Divider,
  IconButton,
  Link,
  Popover,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link as routerLink } from "react-router-dom";
import React from "react";

import locationIcon from "./imageHeader/Location-icon.png";
import maillIcon from "./imageHeader/Maill-icon.png";
import phoneIcon from "./imageHeader/Phone-icon.png";
import ucarsGround from "./imageHeader/UcarsGroup.png";
import carsBackgroud from "./imageHeader/cars-backgroud-1.png";
import divider from "./imageHeader/Divider.png";
import keyboardArrowDown from "./imageHeader/KeyboardArrowDown.png";
import dolarIcon from "./imageHeader/Dolar-icon.png";
import UserNewCars from "../../component/UserNewCars";
import PriceRange from "../../component/PriceRange";
import VehicleType from "../../component/VehicleType";

function MainHeader() {
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
    <Box sx={{ position: "relative" }}>
      <Box sx={{ padding: "11px 60px", width: "1366px" }}>
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
            <Stack direction="row" spacing="12px">
              <img src={locationIcon} alt="" height="16.67px" width="11.67px" />
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "20px",
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
                height: "50px",
                margin: "0 23px",
              }}
            ></Box>

            <Stack direction="row" spacing="12px">
              <img src={maillIcon} alt="" height="13.75px" width="17.5px" />
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  fontFamily: "Poppins",
                }}
              >
                Email us at: <br /> hello@carbuyer.com.sg
              </Typography>
            </Stack>
          </Box>

          <Stack direction="row" spacing="12px">
            <img src={phoneIcon} alt="" height="13.75px" width="17.5px" />
            <Typography
              sx={{
                fontSize: "12px",
                lineHeight: "20px",
                fontFamily: "Inter",
              }}
            >
              +65 8808 7905 <br /> +7 (700) 51 51 518
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Box
        component="div"
        sx={{
          backgroundColor: "#232323",
          width: "1366px",
        }}
      >
        <Box
          sx={{
            padding: "18px 60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={ucarsGround} alt="" height="40px" width="147.06px" />
          </Box>
          <Stack direction="row" spacing="46px">
            <Link
              to=""
              component={routerLink}
              sx={{
                fontSize: "16px",
                lineHeight: "19.36px",
                fontWeight: 500,
                color: "white",
                textDecoration: "none",
              }}
            >
              New Cars
            </Link>
            <Link
              to=""
              component={routerLink}
              sx={{
                fontSize: "16px",
                lineHeight: "19.36px",
                fontWeight: 500,
                color: "white",
                textDecoration: "none",
              }}
            >
              Used Cars
            </Link>
            <Link
              to=""
              component={routerLink}
              sx={{
                fontSize: "16px",
                lineHeight: "19.36px",
                fontWeight: 500,
                color: "white",
                textDecoration: "none",
              }}
            >
              Reviews
            </Link>
            <Link
              to=""
              component={routerLink}
              sx={{
                fontSize: "16px",
                lineHeight: "19.36px",
                fontWeight: 500,
                color: "white",
                textDecoration: "none",
              }}
            >
              News
            </Link>
          </Stack>
          <Button
            sx={{
              fontSize: "16px",
              lineHeight: "19px",
              backgroundColor: "#EE1B24",
              borderRadius: "5px",
              color: "white",
              width: "179px",
              height: "40px",
              ":hover": {
                backgroundColor: "white",
                color: "#EE1B24",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>

      <Box sx={{ position: "relative" }}>
        <img src={carsBackgroud} alt="" width="1366px" height="100%" />
        <Box sx={{ position: "absolute", top: "97px", left: "108px" }}>
          <Stack spacing="16px">
            <Typography
              sx={{
                fontSize: "60px",
                lineHeight: "76px",
                fontWeight: 700,
                color: "#FFFFFF",
                fontFamily: "Poppins",
              }}
            >
              Car Marketplace
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "21.78px",
                fontWeight: 400,
                color: "#FFFFFF",
                fontFamily: "Inter",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Nunc odio in et, lectus sit lorem id integer.
            </Typography>
          </Stack>
          <Button
            sx={{
              backgroundColor: "#EE1B24",
              color: "white",
              height: "52px",
              width: "196px",
              borderRadius: "8px",
              mt: "32px",
              ":hover": {
                backgroundColor: "white",
                color: "#EE1B24",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "1242px",
          backgroundColor: "#FFFFFF",
          position: "absolute",
          left: "62px",
          top: "618px",
          borderRadius: "10px",
          border: " 1px solid #E3E3E3",
          boxShadow: "20px 20px 120px 15px rgba(0, 0, 0, 0.05)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          onClick={handleUserNewCars}
          sx={{
            padding: "25px 0px 25px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: userNewCars !== null ? "#E3E3E3" : "",
            borderRadius: "10px 0 0 10px",
          }}
        >
          <Stack direction="row" spacing="40px" sx={{ alignItems: "center" }}>
            <Box sx={{ padding: "10px 0" }}>
              <Stack spacing="30px">
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 500,
                    color: "#232323",
                  }}
                >
                  New/ Used
                </Typography>
                <Stack direction="row" spacing="123px">
                  <Typography
                    sx={{
                      color: "#5F5F5F",
                      fontSize: "14px",
                      lineHeight: "16px",
                      fontWeight: 400,
                    }}
                  >
                    New Cars
                  </Typography>

                  <IconButton sx={{ padding: "0" }} onClick={handleUserNewCars}>
                    <img src={keyboardArrowDown} alt="" />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                width: "4px",
                height: "60px",
                backgroundColor:
                  userNewCars || userNewCars !== null
                    ? "#E3E3E3"
                    : priceRange
                    ? "#fff"
                    : vehicleType
                    ? "#fff"
                    : "#E3E3E3",
              }}
            />
          </Stack>
        </Box>

        <Box
          component="div"
          onClick={handlePriceRange}
          sx={{
            padding: "25px 0px 25px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: priceRange !== null ? "#E3E3E3" : "",
          }}
        >
          <Stack direction="row" spacing="40px" sx={{ alignItems: "center" }}>
            <Box sx={{ padding: "10px 0" }}>
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
                <Stack direction="row" spacing="78.92px">
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

                  <IconButton sx={{ padding: "0" }} onClick={handlePriceRange}>
                    <img src={keyboardArrowDown} alt="" />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                width: "4px",
                height: "60px",
                backgroundColor:
                  priceRange || priceRange !== null
                    ? "#E3E3E3"
                    : userNewCars
                    ? "#fff"
                    : vehicleType
                    ? "#fff"
                    : "#E3E3E3",
              }}
            />
          </Stack>
        </Box>

        <Box
          component="div"
          onClick={handleVehicleType}
          sx={{
            padding: "25px 40px 25px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: vehicleType !== null ? "#E3E3E3" : "",
          }}
        >
          <Box sx={{ padding: "10px 0" }}>
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
              <Stack direction="row" spacing="123px">
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

                <IconButton sx={{ padding: "0" }} onClick={handleVehicleType}>
                  <img src={keyboardArrowDown} alt="" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ padding: "25px 40px 25px 70px" }}>
          <Button
            variant="contained"
            sx={{
              width: "140px",
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

        <UserNewCars
          userNewCars={userNewCars}
          setUserNewCars={setUserNewCars}
        />
        <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
        <VehicleType
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
        />
      </Box>
    </Box>
  );
}

export default MainHeader;
