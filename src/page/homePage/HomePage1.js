import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

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

function HomePage1() {
  return (
    <Box
      sx={{
        padding: { xs: "50px 0px 50px 20px", lg: "160px 36px 80px 64px" },
        width: { xs: "375px", lg: "100%" },
      }}
    >
      <Box>
        <Box
          className="scroll"
          sx={{
            display: "flex",
            flexWrap: { xs: "nowrap", lg: "wrap" },
            justifyContent: { xs: "space-between", lg: "flex-start" },
            overflowX: { xs: "scroll", lg: "hidden" },
          }}
        >
          <Box sx={{ mb: { xs: "0", lg: "24px" }, mr: "24px" }}>
            <img src={rectangle700} alt="" height="361px" />
          </Box>

          <Box
            sx={{
              height: "361px",
              width: "281px",
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              boxShadow:
                "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
              mr: "24px",
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

                <Stack direction="row" spacing="4px" sx={{ color: "#5F5F5F" }}>
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

          <Box
            sx={{
              height: "361px",
              width: "281px",
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              boxShadow:
                "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
              mr: "24px",
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

                <Stack direction="row" spacing="4px" sx={{ color: "#5F5F5F" }}>
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

          <Box
            sx={{
              height: "361px",
              width: "281px",
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              boxShadow:
                "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
              mr: "24px",
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

                <Stack direction="row" spacing="4px" sx={{ color: "#5F5F5F" }}>
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

          <Box
            sx={{
              height: "361px",
              width: "281px",
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              boxShadow:
                "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
              mr: "24px",
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

                <Stack direction="row" spacing="4px" sx={{ color: "#5F5F5F" }}>
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

          <Box
            sx={{
              height: "361px",
              width: "281px",
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              boxShadow:
                "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
              mr: "24px",
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

                <Stack direction="row" spacing="4px" sx={{ color: "#5F5F5F" }}>
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

          <Box
            sx={{
              height: "361px",
              width: "281px",
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              boxShadow:
                "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
              mr: "24px",
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

                <Stack direction="row" spacing="4px" sx={{ color: "#5F5F5F" }}>
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

          <Box
            sx={{
              height: "361px",
              width: "281px",
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              boxShadow:
                "0px 8px 16px 0px #3031331A ,0px 0px 1px 0px #3031330D",
              mr: "24px",
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

                <Stack direction="row" spacing="4px" sx={{ color: "#5F5F5F" }}>
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
  );
}

export default HomePage1;
