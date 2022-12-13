import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rectangle700 from "./Rectangle/Rectangle 700.png";
import rectangle4 from "./Rectangle/Rectangle 4.png";
import rectangle41 from "./Rectangle/Rectangle 4-1.png";
import rectangle42 from "./Rectangle/Rectangle 4-2.png";
import { faL } from "@fortawesome/free-solid-svg-icons";

function HomePage3() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box
        sx={{
          padding: { xs: "60px 0px 60px 10px", lg: "80px 0px 80px 64px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: "32px", lg: "60px" },
          backgroundColor: { xs: " #E0E0E0", lg: "white" },
          width: { xs: "375px", lg: "1366px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "109px",
            width: { xs: "373px", lg: "1242px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "7px",
              width: { xs: "373px", lg: "678px" },
              height: { lg: "164px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "32px", lg: "48px" },
                color: "#EE1B24",
                fontFamily: "Poppins",
                lineHeight: { xs: "48px", lg: "72px" },
                fontStyle: "normal",
              }}
            >
              Our Featured Vehicles.
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "20px", lg: "32px" },
                color: "#232323",
                fontFamily: "Poppins",
                fontStyle: "normal",
                lineHeight: { xs: "30px", lg: "48px" },
                textAlign: { xs: "center", lg: "start" },
                width: { lg: "681px" },
              }}
            >
              One of our biggest product to be featured and that has sold out
              the most.
            </Typography>
          </Box>

          <Button
            sx={{
              padding: "11px 48px",
              borderRadius: "5px",
              backgroundColor: "#EE1B24",
              color: "white",
              fontSize: "16px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 600,
              display: { xs: "none", lg: "flex" },
              // mt: { xs: "10px", lg: "0" },
              lineHeight: "19px",
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
            alignItems: "flex-start",
            padding: "0px",
            Width: { xs: "375px", lg: "1366px" },
          }}
        >
          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "7.94427px 15.8885px 14.2997px 38.9269px ",
              gap: "17.48px ",
              width: "415px !important",
              height: "361px",
              borderRadius: " 0px 39.7214px",
              backgroundColor: "white",
            }}
          >
            <Box
              component="img"
              src={rectangle4}
              alt=""
              sx={{ width: "349.55px", height: "202.58px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
                padding: "0px",
                gap: "114.4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "2.38px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.78px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "48px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                    opacity: "0.8",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "6.36px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "29px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                  }}
                >
                  $2,000
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "7.94427px 15.8885px 14.2997px 38.9269px",
              gap: "17.48px",
              width: "415px !important",
              height: "361px",
              borderRadius: " 0px 39.7214px",
              backgroundColor: "white",
            }}
          >
            <Box
              component="img"
              src={rectangle41}
              alt=""
              sx={{ width: "349.55px", height: "202.58px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
                gap: "114.4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2.38px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.8px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "48px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                    opacity: "0.8",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "6.36px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "29px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                  }}
                >
                  $2,000
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              component="img"
              src={rectangle700}
              alt=""
              sx={{ width: "281px", height: "361px" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "7.94427px 15.8885px 14.2997px 38.9269px",
              gap: "17.48px",
              width: "415px !important",
              height: "361px",
              borderRadius: " 0px 39.7214px",
              backgroundColor: "white",
            }}
          >
            <Box
              component="img"
              src={rectangle42}
              alt=""
              sx={{ width: "349.55px", height: "202.58px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
                padding: "0px",
                gap: "114.4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "2.38px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.78px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "48px",
                  }}
                >
                  REXONA
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "29px",
                    opacity: "0.8",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "6.36px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "29px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                  }}
                >
                  $2,000
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "7.94427px 15.8885px 14.2997px 38.9269px",
              gap: "17.48px",
              width: "415px !important",
              height: "361px",
              borderRadius: " 0px 39.7214px",
              backgroundColor: "white",
            }}
          >
            <Box
              component="img"
              src={rectangle4}
              alt=""
              sx={{ width: "349.55px", height: "202.58px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
                padding: "0px",
                gap: "114.4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "2.38px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.78px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "48px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                    opacity: "0.8",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "6.36px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "29px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                  }}
                >
                  $2,000
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "7.94427px 15.8885px 14.2997px 38.9269px",
              gap: "17.48px",
              width: "415px !important",
              height: "361px",
              borderRadius: " 0px 39.7214px",
              backgroundColor: "white",
            }}
          >
            <Box
              component="img"
              src={rectangle41}
              alt=""
              sx={{ width: "349.55px", height: "202.58px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
                gap: "114.4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2.38px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "31.8px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "48px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                    opacity: "0.8",
                  }}
                >
                  Lekki,phase 2
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "6.36px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "19.7px",
                    color: "#232323",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: "29px",
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
                    fontStyle: "normal",
                    lineHeight: "29px",
                  }}
                >
                  $2,000
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            padding: "11px 48px",
            borderRadius: "5px",
            backgroundColor: "#EE1B24",
            color: "white",
            fontSize: "16px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 600,
            alignSelf: "end",
            display: { xs: "flex", lg: "none" },
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
    </>
  );
}

export default HomePage3;
