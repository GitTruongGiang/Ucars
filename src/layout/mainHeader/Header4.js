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
        height: { xs: "436px", lg: "139px" },
        backgroundColor: "#FFFFFF",
        position: { xs: "static", lg: "absolute" },
        left: { xs: "0", lg: "62px" },
        top: { xs: "0", lg: "618px" },
        borderRadius: { xs: "6px", lg: "10px" },
        border: "1px solid #E3E3E3",
        boxShadow: "20px 20px 120px 15px rgba(0, 0, 0, 0.05)",
        padding: { xs: "8px", lg: "25px 40px" },
        mt: { xs: "24px", lg: "0" },
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "0", lg: "40px" },
        alignItems: { xs: "flex-start", lg: "center" },
        margin: "0 auto",
      }}
    >
      <Box
        component="div"
        onClick={handleUserNewCars}
        sx={{
          padding: { xs: "5px 16px", lg: "0px" },
          boxShadow: { xs: "inset 0px -1px 0px #F1F1F1", lg: "0" },
          width: { xs: "333px", lg: "210.26px" },
          height: { xs: "120px", lg: "89px" },
          display: { xs: "flex", lg: "flex" },
          flexDirection: { xs: "column" },
          alignItems: { xs: "flex-start" },
          justifyContent: { xs: "center" },
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Roboto",
            color: "#232323",
            lineHeight: "19px",
            fontStyle: "normal",
            display: "flex",
            alignItems: "center",
          }}
        >
          New/ Used
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
            gap: "10px",
            width: { xs: "300.62px", lg: "210px" },
            height: "54px",
          }}
        >
          <Typography
            sx={{
              color: "#5F5F5F",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "16px",
              display: "flex",
              alignItems: "center",
              fontFamily: "Roboto",
              fontStyle: "normal",
            }}
          >
            New Cars
          </Typography>

          <KeyboardArrowDownIcon
            sx={{ padding: "0", fontSize: "24px" }}
            onClick={handleUserNewCars}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "60px", lg: "3px" },
          height: { xs: "1px", lg: "60px" },
          backgroundColor: "#E3E3E3",
          // margin: { xs: "10px 0px", lg: "40px 40px" },
          // border: "3px dashed #f1f1f1",
          // backgroundColor: "#E3E3E3",
          borderRadius: "20px",
          display: { xs: "none", lg: "block" },
        }}
      />

      <Box
        component="div"
        onClick={handlePriceRange}
        sx={{
          display: { xs: "flex", lg: "flex" },
          flexDirection: { xs: "column" },
          alignItems: { xs: "flex-start" },
          justifyContent: { xs: "center" },
          padding: { xs: "5px 16px", lg: "0px" },
          boxShadow: { xs: "inset 0px -1px 0px #F1F1F1", lg: "0" },
          width: { xs: "333px", lg: "332.92px" },
          height: { xs: "120px", lg: "89px" },
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Roboto",
            color: "#232323",
            lineHeight: "19px",
            fontStyle: "normal",
            display: "flex",
            alignItems: "center",
          }}
        >
          Price Range
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
            gap: "10px",
            width: { xs: "301px", lg: "332.92px" },
            height: { lg: "54px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
              gap: "17px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                gap: "8px",
              }}
            >
              <img src={dolarIcon} alt="" />
              <Typography
                sx={{
                  color: "#5F5F5F",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: 400,
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                $10,0000
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#5F5F5F",
                width: "16px",
                height: "0px",
                border: "0.838476px solid #5F5F5F",
                transform: "rotate(-180deg)",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0",
                gap: "8px",
              }}
            >
              <img src={dolarIcon} alt="" />
              <Typography
                sx={{
                  color: "#5F5F5F",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: 400,
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                $100,0000
              </Typography>
            </Box>
          </Box>

          <KeyboardArrowDownIcon
            sx={{ padding: "0", fontSize: "24px" }}
            onClick={handlePriceRange}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "60px", lg: "3px" },
          height: { xs: "1px", lg: "60px" },
          backgroundColor: "#E3E3E3",
          // margin: { xs: "10px 0px", lg: "40px 40px" },
          // border: "3px dashed #f1f1f1",
          // backgroundColor: "#E3E3E3",
          borderRadius: "20px",
          display: { xs: "none", lg: "block" },
        }}
      />

      <Box
        component="div"
        onClick={handleVehicleType}
        sx={{
          display: { xs: "flex", lg: "flex" },
          flexDirection: { xs: "column" },
          alignItems: { xs: "flex-start" },
          justifyContent: { xs: "center" },
          padding: { xs: "5px 16px", lg: "0px" },
          boxShadow: { xs: "inset 0px -1px 0px #F1F1F1", lg: "0" },
          width: { xs: "333px", lg: "210.26px" },
          height: { xs: "120px", lg: "89px" },
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Roboto",
            color: "#232323",
            lineHeight: "19px",
            fontStyle: "normal",
            display: "flex",
            alignItems: "center",
          }}
        >
          Vehicle Type
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
            gap: "10px",
            width: { xs: "300.62px", lg: "210px" },
            height: "54px",
          }}
        >
          <Box
            sx={{
              color: "#5F5F5F",
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: 400,
              fontFamily: "Roboto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ display: { xs: "none", lg: "block" } }}>
              Duplex
            </Typography>
            <Typography sx={{ display: { xs: "block", lg: "none" } }}>
              +10 More
            </Typography>
          </Box>
          <KeyboardArrowDownIcon
            sx={{ padding: "0", fontSize: "24px" }}
            onClick={handleVehicleType}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "60px", lg: "3px" },
          height: { xs: "1px", lg: "60px" },
          backgroundColor: "#E3E3E3",
          // margin: { xs: "10px 0px", lg: "40px 40px" },
          // border: "3px dashed #f1f1f1",
          // backgroundColor: "#E3E3E3",
          borderRadius: "20px",
          display: { xs: "none", lg: "block" },
        }}
      />

      <Button
        variant="contained"
        sx={{
          width: { xs: "333px", lg: "140px" },
          height: { xs: "60px", lg: "60px" },
          padding: "16px 40px",
          borderRadius: "5px",
          backgroundColor: "#EE1B24",
          fontSize: "16px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          lineHeight: "19px",
          fontWeight: 700,
          color: "white",
          ":hover": { backgroundColor: "white", color: "#EE1B24" },
        }}
      >
        Search
      </Button>

      <UserNewCars userNewCars={userNewCars} setUserNewCars={setUserNewCars} />
      <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
      <VehicleType vehicleType={vehicleType} setVehicleType={setVehicleType} />
    </Box>
  );
}

export default Header4;
