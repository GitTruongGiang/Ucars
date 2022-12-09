import { Button, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link as routerLink } from "react-router-dom";
import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ucarsGround from "./imageHeader/UcarsGroup.png";
import carsBackgroud from "./imageHeader/cars-backgroud-1.png";
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
    <Box>
      <Box
        sx={{
          padding: { xs: "7px 10px", lg: "11px 60px" },
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

      <Box
        component="div"
        sx={{
          backgroundColor: "#232323",
          // width: { xs: "375px", lg: "1366px" },
        }}
      >
        <Box
          sx={{
            padding: { xs: "8px 10px", lg: "18px 60px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              className="ucarsGround"
              src={ucarsGround}
              alt=""
              height="40px"
              width="147.06px"
            />
          </Box>

          <Stack direction="row" spacing={{ xs: "10px", lg: "46px" }}>
            <Link
              to=""
              component={routerLink}
              sx={{
                fontSize: { xs: "10px", lg: "16px" },
                lineHeight: { xs: "19.36px", lg: "19.36px" },
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
                fontSize: { xs: "10px", lg: "16px" },
                lineHeight: { xs: "19.36px", lg: "19.36px" },
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
                fontSize: { xs: "10px", lg: "16px" },
                lineHeight: { xs: "19.36px", lg: "19.36px" },
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
                fontSize: { xs: "10px", lg: "16px" },
                lineHeight: { xs: "19.36px", lg: "19.36px" },
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
              fontSize: { xs: "8px", lg: "16px" },
              backgroundColor: "#EE1B24",
              borderRadius: "5px",
              color: "white",
              padding: { xs: "5px 25px", lg: "11px 68px" },
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
        <Box component="img" src={carsBackgroud} sx={{ width: "100%" }} />
        <Box
          sx={{
            position: "absolute",
            top: { xs: "19.4px", lg: "97px" },
            left: { xs: "21.6px", lg: "108px" },
          }}
        >
          <Stack spacing={{ xs: "3.2px", lg: "16px" }}>
            <Typography
              sx={{
                fontSize: { xs: "20px", lg: "60px" },
                fontWeight: 700,
                color: "#FFFFFF",
                fontFamily: "Poppins",
              }}
            >
              Car Marketplace
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "8px", lg: "18px" },
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
              padding: { xs: "4px 15px", lg: "11px 48px" },
              borderRadius: { xs: "3px", lg: "8px" },
              mt: { xs: "8px", lg: "32px" },
              fontSize: { xs: "8px", lg: "18px" },
              fontWeight: 600,
              fontFamily: "Inter",
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
