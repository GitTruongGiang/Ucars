import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rectangle700 from "./Rectangle/Rectangle 700.png";
import rectangle4 from "./Rectangle/Rectangle 4.png";
import rectangle41 from "./Rectangle/Rectangle 4-1.png";
import rectangle42 from "./Rectangle/Rectangle 4-2.png";

function HomePage3() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        padding: { xs: "40px 10px 10px 10px", lg: "80px 0px 80px 64px" },
      }}
    >
      <Box sx={{ padding: { xs: "0 0px 0px 0", lg: "0 60px 60px 0" } }}>
        <Stack spacing="7px">
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "32px", lg: "48px" },
              color: "#EE1B24",
              fontFamily: "Poppins",
              textAlign: { xs: "center", lg: "start" },
            }}
          >
            Our Featured Vehicles.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "20px", lg: "32px" },
                color: "#232323",
                fontFamily: "Poppins",
                textAlign: { xs: "center" },
              }}
            >
              One of our biggest product to be featured
              <br /> and that has sold out the most.
            </Typography>
            <Button
              sx={{
                height: "40px",
                width: "179px",
                borderRadius: "5px",
                backgroundColor: "#EE1B24",
                color: "white",
                fontSize: "16px",
                alignSelf: "end",
                mt: { xs: "10px" },
                ":hover": {
                  backgroundColor: "white",
                  color: "#EE1B24",
                  border: "1px solid #EE1B24",
                },
              }}
            >
              View More
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ paddingBottom: "50px", cursor: "pointer" }}>
        <Slider {...settings}>
          <Box>
            <Box
              sx={{
                padding: {
                  xs: "7.94px 0px 0 0px",
                  lg: "7.94px 26.53px 0 38.93px",
                },
              }}
            >
              <Box
                component="img"
                src={rectangle4}
                alt=""
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                padding: {
                  xs: "56.79px 10px 14.3px 10px",
                  lg: "56.79px 18.68px 14.3px 38.93px",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Stack spacing="2.38px">
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.78px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  The Palace
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Stack>
              <Stack spacing="6.36px">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Duplex
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "19.7px",
                    color: "#EE1B24",
                    fontFamily: "Poppins",
                  }}
                >
                  $2,000
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                padding: {
                  xs: "7.94px 0px 0 0px",
                  lg: "7.94px 26.53px 0 38.93px",
                },
              }}
            >
              <Box
                component="img"
                src={rectangle41}
                alt=""
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                padding: {
                  xs: "56.79px 10px 14.3px 10px",
                  lg: "56.79px 18.68px 14.3px 38.93px",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Stack spacing="2.38px">
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.78px",
                    lineHeight: "47.76px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  IVY RORY
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Stack>
              <Stack spacing="6.36px">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Duplex
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#EE1B24",
                    fontFamily: "Poppins",
                  }}
                >
                  $2,000
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                padding: {
                  xs: "7.94px 0px 0 0px",
                  lg: "7.94px 26.53px 0 38.93px",
                },
              }}
            >
              <Box
                component="img"
                src={rectangle700}
                alt=""
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                padding: {
                  xs: "7.94px 0px 0 0px",
                  lg: "7.94px 26.53px 0 38.93px",
                },
              }}
            >
              <Box
                component="img"
                src={rectangle42}
                alt=""
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                padding: {
                  xs: "56.79px 10px 14.3px 10px",
                  lg: "56.79px 18.68px 14.3px 38.93px",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Stack spacing="2.38px">
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.78px",
                    lineHeight: "47.76px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  REXONA
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Stack>
              <Stack spacing="6.36px">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Duplex
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#EE1B24",
                    fontFamily: "Poppins",
                  }}
                >
                  $2,000
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                padding: {
                  xs: "7.94px 0px 0 0px",
                  lg: "7.94px 26.53px 0 38.93px",
                },
              }}
            >
              <Box
                component="img"
                src={rectangle4}
                alt=""
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                padding: {
                  xs: "56.79px 10px 14.3px 10px",
                  lg: "56.79px 18.68px 14.3px 38.93px",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Stack spacing="2.38px">
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.78px",
                    lineHeight: "47.76px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  The Palace
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Stack>
              <Stack spacing="6.36px">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Duplex
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#EE1B24",
                    fontFamily: "Poppins",
                  }}
                >
                  $2,000
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                padding: {
                  xs: "7.94px 0px 0 0px",
                  lg: "7.94px 26.53px 0 38.93px",
                },
              }}
            >
              <Box
                component="img"
                src={rectangle41}
                alt=""
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                padding: {
                  xs: "56.79px 10px 14.3px 10px",
                  lg: "56.79px 18.68px 14.3px 38.93px",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Stack spacing="2.38px">
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.78px",
                    lineHeight: "47.76px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  IVY RORY
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Stack>
              <Stack spacing="6.36px">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#232323",
                    fontFamily: "Poppins",
                  }}
                >
                  Duplex
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "19.7px",
                    lineHeight: "28.6px",
                    color: "#EE1B24",
                    fontFamily: "Poppins",
                  }}
                >
                  $2,000
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default HomePage3;
