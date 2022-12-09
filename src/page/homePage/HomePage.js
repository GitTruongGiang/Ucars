import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rectangle700 from "./Rectangle/Rectangle 700.png";
import rectangle673 from "./Rectangle/Rectangle 673.png";
import ellipse from "./Rectangle/Ellipse.png";

import rectangle6732 from "./Rectangle/Rectangle 673-2.png";
import ellipse2 from "./Rectangle/Ellipse-2.png";
import rectangle6733 from "./Rectangle/Rectangle 673-3.png";
import ellipse3 from "./Rectangle/Ellipse-3.png";
import rectangle6734 from "./Rectangle/Rectangle 673-4.png";
import rectangle6735 from "./Rectangle/Rectangle 673-5.png";
import rectangle6736 from "./Rectangle/Rectangle 673-6.png";
import rectangle6737 from "./Rectangle/Rectangle 673-7.png";

import locationIcon from "./imageIcon/ic_round-pin-drop.png";
import smartHouse from "./Rectangle/Smart house.png";
import Secure from "./Rectangle/Secure data protection with fingerprint and lock.png";

import rectangle4 from "./Rectangle/Rectangle 4.png";
import rectangle41 from "./Rectangle/Rectangle 4-1.png";
import rectangle42 from "./Rectangle/Rectangle 4-2.png";

import unsplash from "./Rectangle/unsplash_SV3e7hGlVnc.png";

function HomePage() {
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
    <Box>
      <Box
        sx={{
          padding: { xs: "50px 30px 50px 20px", lg: "160px 61px 80px 64px" },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "nowrap", lg: "wrap" },
              justifyContent: "space-between",
            }}
          >
            <Stack
              className="scroll"
              sx={{
                display: "flex",
                flexWrap: { xs: "nowrap", lg: "wrap" },
                justifyContent: "space-between",
                overflowX: { xs: "scroll" },
              }}
              direction={{ xs: "row" }}
              spacing={{ xs: "39px", lg: "0" }}
            >
              <Box sx={{ mb: { xs: "0", lg: "24px" } }}>
                <img src={rectangle700} alt="" height="361px" />
              </Box>
              <Box>
                <Box
                  sx={{
                    height: "361px",
                    width: "281px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "5px",
                    boxShadow:
                      "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
                  }}
                >
                  <img src={rectangle673} alt="" height="187px" />
                  <Box sx={{ padding: "16px 0 24px 16px" }}>
                    <Stack spacing="8px">
                      <Typography
                        sx={{
                          color: "#232323",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                        }}
                      >
                        BMW X3
                      </Typography>
                      <Stack direction="row" spacing="8px">
                        <Typography
                          sx={{
                            color: "#232323",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                          }}
                        >
                          From{" "}
                          <span style={{ color: "#0F5EDD", fontWeight: 600 }}>
                            $248,000
                          </span>
                        </Typography>
                        <Box
                          sx={{
                            width: "72px",
                            height: "24px",
                            backgroundColor: "#E5EEFB",
                            borderRadius: "2px",
                          }}
                        >
                          <Box sx={{ padding: "2px 4px" }}>
                            <Typography
                              sx={{
                                color: "#0F5EDD",
                                fontSize: "12px",
                                fontWeight: 400,
                                lineHeight: "20px",
                              }}
                            >
                              $2,302/mo
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="4px"
                        sx={{ color: "#5F5F5F" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          4 variants
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          | with COE
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="8px"
                        sx={{ alignItems: "center" }}
                      >
                        <img src={ellipse} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                            color: "#232323",
                          }}
                        >
                          Performance Motors
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    height: "361px",
                    width: "281px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "5px",
                    boxShadow:
                      "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
                  }}
                >
                  <img src={rectangle6732} alt="" height="187px" />
                  <Box sx={{ padding: "16px 0 24px 16px" }}>
                    <Stack spacing="8px">
                      <Typography
                        sx={{
                          color: "#232323",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                        }}
                      >
                        Alpine A110
                      </Typography>
                      <Stack direction="row" spacing="8px">
                        <Typography
                          sx={{
                            color: "#232323",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                          }}
                        >
                          From{" "}
                          <span style={{ color: "#0F5EDD", fontWeight: 600 }}>
                            $248,000
                          </span>
                        </Typography>
                        <Box
                          sx={{
                            width: "72px",
                            height: "24px",
                            backgroundColor: "#E5EEFB",
                            borderRadius: "2px",
                          }}
                        >
                          <Box sx={{ padding: "2px 4px" }}>
                            <Typography
                              sx={{
                                color: "#0F5EDD",
                                fontSize: "12px",
                                fontWeight: 400,
                                lineHeight: "20px",
                              }}
                            >
                              $2,302/mo
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="4px"
                        sx={{ color: "#5F5F5F" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          3 variants
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          | with COE
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="8px"
                        sx={{ alignItems: "center" }}
                      >
                        <img src={ellipse2} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                            color: "#232323",
                          }}
                        >
                          Wearnes Automotive
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    height: "361px",
                    width: "281px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "5px",
                    boxShadow:
                      "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
                  }}
                >
                  <img src={rectangle6733} alt="" height="187px" />
                  <Box sx={{ padding: "16px 0 24px 16px" }}>
                    <Stack spacing="8px">
                      <Typography
                        sx={{
                          color: "#232323",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                        }}
                      >
                        Aston Martin DBS Superlegge...
                      </Typography>
                      <Stack direction="row" spacing="8px">
                        <Typography
                          sx={{
                            color: "#232323",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                          }}
                        >
                          POA
                        </Typography>
                        <Box
                          sx={{
                            width: "72px",
                            height: "24px",
                            backgroundColor: "#E5EEFB",
                            borderRadius: "2px",
                          }}
                        >
                          <Box sx={{ padding: "2px 4px" }}>
                            <Typography
                              sx={{
                                color: "#0F5EDD",
                                fontSize: "12px",
                                fontWeight: 400,
                                lineHeight: "20px",
                              }}
                            >
                              $2,302/mo
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="4px"
                        sx={{ color: "#5F5F5F" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          1 variant
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="8px"
                        sx={{ alignItems: "center" }}
                      >
                        <img src={ellipse3} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                            color: "#232323",
                          }}
                        >
                          Wearnes Automotive
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    height: "361px",
                    width: "281px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "5px",
                    boxShadow:
                      "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
                  }}
                >
                  <img src={rectangle6734} alt="" height="187px" />
                  <Box sx={{ padding: "16px 0 24px 16px" }}>
                    <Stack spacing="8px">
                      <Typography
                        sx={{
                          color: "#232323",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                        }}
                      >
                        Aston Martin DBS Superlegge...
                      </Typography>
                      <Stack direction="row" spacing="8px">
                        <Typography
                          sx={{
                            color: "#232323",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                          }}
                        >
                          From{" "}
                          <span style={{ color: "#0F5EDD", fontWeight: 600 }}>
                            $278,000
                          </span>
                        </Typography>
                        <Box
                          sx={{
                            width: "72px",
                            height: "24px",
                            backgroundColor: "#E5EEFB",
                            borderRadius: "2px",
                          }}
                        >
                          <Box sx={{ padding: "2px 4px" }}>
                            <Typography
                              sx={{
                                color: "#0F5EDD",
                                fontSize: "12px",
                                fontWeight: 400,
                                lineHeight: "20px",
                              }}
                            >
                              $2,302/mo
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="4px"
                        sx={{ color: "#5F5F5F" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          3 variants
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          | with COE
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="8px"
                        sx={{ alignItems: "center" }}
                      >
                        <img src={ellipse} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                            color: "#232323",
                          }}
                        >
                          EuroAutomobile
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    height: "361px",
                    width: "281px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "5px",
                    boxShadow:
                      "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
                  }}
                >
                  <img src={rectangle6735} alt="" height="187px" />
                  <Box sx={{ padding: "16px 0 24px 16px" }}>
                    <Stack spacing="8px">
                      <Typography
                        sx={{
                          color: "#232323",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                        }}
                      >
                        Aston Martin DB11 Volante
                      </Typography>
                      <Stack direction="row" spacing="8px">
                        <Typography
                          sx={{
                            color: "#232323",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                          }}
                        >
                          POA
                        </Typography>
                        <Box
                          sx={{
                            width: "72px",
                            height: "24px",
                            backgroundColor: "#E5EEFB",
                            borderRadius: "2px",
                          }}
                        >
                          <Box sx={{ padding: "2px 4px" }}>
                            <Typography
                              sx={{
                                color: "#0F5EDD",
                                fontSize: "12px",
                                fontWeight: 400,
                                lineHeight: "20px",
                              }}
                            >
                              $2,302/mo
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="4px"
                        sx={{ color: "#5F5F5F" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          1 variant
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="8px"
                        sx={{ alignItems: "center" }}
                      >
                        <img src={ellipse3} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                            color: "#232323",
                          }}
                        >
                          Wearnes Automotive
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    height: "361px",
                    width: "281px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "5px",
                    boxShadow:
                      "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
                  }}
                >
                  <img src={rectangle6736} alt="" height="187px" />
                  <Box sx={{ padding: "16px 0 24px 16px" }}>
                    <Stack spacing="8px">
                      <Typography
                        sx={{
                          color: "#232323",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                        }}
                      >
                        Aston Martin DB11
                      </Typography>
                      <Stack direction="row" spacing="8px">
                        <Typography
                          sx={{
                            color: "#232323",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                          }}
                        >
                          From{" "}
                          <span style={{ color: "#0F5EDD", fontWeight: 600 }}>
                            $799,000
                          </span>
                        </Typography>
                        <Box
                          sx={{
                            width: "72px",
                            height: "24px",
                            backgroundColor: "#E5EEFB",
                            borderRadius: "2px",
                          }}
                        >
                          <Box sx={{ padding: "2px 4px" }}>
                            <Typography
                              sx={{
                                color: "#0F5EDD",
                                fontSize: "12px",
                                fontWeight: 400,
                                lineHeight: "20px",
                              }}
                            >
                              $2,302/mo
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="4px"
                        sx={{ color: "#5F5F5F" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          1 variant
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="8px"
                        sx={{ alignItems: "center" }}
                      >
                        <img src={ellipse3} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                            color: "#232323",
                          }}
                        >
                          Wearnes Automotive
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    height: "361px",
                    width: "281px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "5px",
                    boxShadow:
                      "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
                  }}
                >
                  <img src={rectangle6737} alt="" height="187px" />
                  <Box sx={{ padding: "16px 0 24px 16px" }}>
                    <Stack spacing="8px">
                      <Typography
                        sx={{
                          color: "#232323",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                        }}
                      >
                        Aston Martin DB11 Volante
                      </Typography>
                      <Stack direction="row" spacing="8px">
                        <Typography
                          sx={{
                            color: "#232323",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                          }}
                        >
                          POA
                        </Typography>
                        <Box
                          sx={{
                            width: "72px",
                            height: "24px",
                            backgroundColor: "#E5EEFB",
                            borderRadius: "2px",
                          }}
                        >
                          <Box sx={{ padding: "2px 4px" }}>
                            <Typography
                              sx={{
                                color: "#0F5EDD",
                                fontSize: "12px",
                                fontWeight: 400,
                                lineHeight: "20px",
                              }}
                            >
                              $2,302/mo
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="4px"
                        sx={{ color: "#5F5F5F" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                          }}
                        >
                          1 variant
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing="8px"
                        sx={{ alignItems: "center" }}
                      >
                        <img src={ellipse3} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "22px",
                            fontFamily: "Poppins",
                            color: "#232323",
                          }}
                        >
                          Wearnes Automotive
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{
                height: "40px",
                width: "194px",
                backgroundColor: "white",
                border: "1px solid #EE1B24",
                color: "#EE1B24",
                mt: "24px",
                borderRadius: "5px",
                fontSize: "14px",
                lineHeight: "24px",
                gap: "4px",
              }}
            >
              View more new cars
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#232323" }}>
        <Stack spacing="7px" sx={{ pt: "22px", textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "36px", lg: "48px" },
              fontWeight: 700,
              color: "#EE1B24",
            }}
          >
            How it works.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", lg: "32px" },
              color: "#FFFFFF",
            }}
          >
            This is how our products works
          </Typography>
        </Stack>

        <Box
          sx={{
            padding: {
              xs: "40px 60px 40px 60px",
              lg: "142px 96px 139px 96px",
            },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ textAlign: "center", width: "338px", mb: { xs: "60px" } }}>
            <Box sx={{ mb: { xs: "20px", lg: "46.5px" } }}>
              <img src={locationIcon} alt="" />
            </Box>
            <Stack spacing="11px">
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "24px", lg: "36px" },
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                Find Car
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "16px", lg: "24px" },
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                Our cars are located at prime areas where by there won’t be
                problem with transportation
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ textAlign: "center", width: "338px", mb: { xs: "60px" } }}>
            <Box sx={{ mb: { xs: "20px", lg: "46.5px" } }}>
              <img src={smartHouse} alt="" />
            </Box>
            <Stack spacing="11px">
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "24px", lg: "36px" },
                  lineHeight: "54px",
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                Make payments
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "16px", lg: "24px" },
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                Our estates comes with good network,portable water , 24hrs light
                and round the clock security.
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ textAlign: "center", width: "338px" }}>
            <Box sx={{ mb: { xs: "20px", lg: "46.5px" } }}>
              <img src={Secure} alt="" />
            </Box>
            <Stack spacing="11px">
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "24px", lg: "36px" },
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                Make it Official
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "16px", lg: "24px" },
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                We have been in business for over 32 years,for client outside
                the country you can trust us to deliver well.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>

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

      <Box sx={{ position: "relative" }}>
        <Box component="div" className="unsplash"></Box>
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

      <Box sx={{ mt: "80px", display: { xs: "none", lg: "block" } }}>
        <Box sx={{ padding: "40px 91px 40px 90px" }}>
          <Stack spacing="16px">
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#5F5F5F",
                fontFamily: "Poppins",
              }}
            >
              UCARS - Revolutionizing The Online Car Marketplace In Singapore
            </Typography>
            <Stack spacing="24px">
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "24px",
                    color: "#5F5F5F",
                    fontFamily: "Poppins",
                  }}
                >
                  Buy Used And New Cars Online
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#5F5F5F",
                    fontFamily: "Poppins",
                  }}
                >
                  Start your car buying journey with UCARS as we connect you
                  seamlessly to the industry's best CaseTrust-SVTA accredited
                  car dealerships. As a one stop car online portal you can now
                  buy your new ride, be it a pre-owned car or a brand new car
                  from trusted dealers all over Singapore, all in one place. Our
                  ever expanding listing of quality and covet-worthy cars, new
                  and second hand, from both owners and trusted car dealers,
                  will leave you spoilt for choice. Refine your search by
                  vehicle type, registration year, price, mileage, engine type,
                  transmission, annual depreciation value and more to find the
                  car that best suits your needs, taste and lifestyle. You can
                  even search for your car by dealer or directly by owner.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "24px",
                    color: "#5F5F5F",
                    fontFamily: "Poppins",
                  }}
                >
                  Sell Your Car In An Instant With Confidence
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#5F5F5F",
                    fontFamily: "Poppins",
                  }}
                >
                  We all know how selling a car in Singapore can be a daunting
                  task especially for a first time car seller; from trying to
                  get a valuation for your car, finding a trusted dealer, to
                  getting the best quote on your vehicle. UCARS understands the
                  hassle and even the costs involved and have as such partnered
                  with Huawei to develop a FIRST in Southeast Asia AI car
                  valuation tool that is able to provide a car’s resale value at
                  the snap of a finger. Backed with a consortium of trusted
                  CaseTrust-SVTA accredited car dealers you can be assured that
                  you are getting the best price for your vehicle and do not
                  have to worry about any hidden costs.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "24px",
                    color: "#5F5F5F",
                    fontFamily: "Poppins",
                  }}
                >
                  The Ultimate Car Shopping Experience Online
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#5F5F5F",
                    fontFamily: "Poppins",
                  }}
                >
                  The Ultimate Car Shopping Experience Online UCARS platform is
                  the first of its kind to be backed by Huawei’s Artificial
                  Intelligence and cloud computing, enabling it to be able to
                  offer users transparency and enhanced security, all with the
                  one aim of enhancing customer experience. So come on over to
                  buy and sell used cars online at the best prices at UCARS
                  Singapore. Connect easily with dealers in real-time via our
                  online video call feature, or schedule a test drive when
                  you're ready. Have some questions? Get them answered instantly
                  with our chatbot moderated by our responsive team. Stay in the
                  loop with our car-related tips, reviews and news. Learn the
                  ins-and-outs of your car, as well as global and Singapore’s
                  car updates at your own pace.
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
