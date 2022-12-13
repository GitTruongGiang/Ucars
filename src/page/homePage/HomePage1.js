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
        padding: { xs: "50px 0px 50px 13px", lg: "160px 36px 80px 64px" },
        width: { xs: "375px", lg: "1366px" },
      }}
    >
      <Box>
        <Box
          className="scroll"
          sx={{
            display: "flex",
            flexWrap: { xs: "nowrap", lg: "wrap" },
            justifyContent: { xs: "space-between", lg: "flex-start" },
            flexDirection: "row",
            alignItems: "flex-start",
            gap: { xs: "39px", lg: "24px" },
            overflowX: "auto",
            overflowY: "hidden",
            width: { xs: "2521px", lg: "1241px" },
          }}
        >
          <Box
            component="img"
            src={rectangle700}
            sx={{
              height: "361px",
              width: "281px",
              display: { xs: "none", lg: "block" },
            }}
          />

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
            <img src={rectangle673} alt="" height="187px" width="281px" />
            <Box sx={{ padding: "16px 0 24px 16px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: "#232323",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                  }}
                >
                  BMW X3
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#232323",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                    }}
                  >
                    From{" "}
                    <span
                      style={{
                        color: "#0F5EDD",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontStyle: "normal",
                        fontFamily: "Poppins",
                      }}
                    >
                      $248,000
                    </span>
                  </Typography>
                  <Box
                    sx={{
                      width: "72px",
                      height: "24px",
                      backgroundColor: "#E5EEFB",
                      borderRadius: "2px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "2px 4px",
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ padding: "2px 4px" }}>
                      <Typography
                        sx={{
                          color: "#0F5EDD",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                        }}
                      >
                        $2,302/mo
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "#5F5F5F",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "4px",
                    padding: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
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
                      fontStyle: "normal",
                    }}
                  >
                    | with COE
                  </Typography>
                </Box>

                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    padding: "0",
                    flexDirection: "row",
                    gap: "8px",
                  }}
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
                </Box>
              </Box>
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
            }}
          >
            <img src={rectangle6732} alt="" height="187px" width="281px" />
            <Box sx={{ padding: "16px 0 24px 16px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: "#232323",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                  }}
                >
                  Alpine A110
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#232323",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                    }}
                  >
                    From{" "}
                    <span
                      style={{
                        color: "#0F5EDD",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontStyle: "normal",
                        fontFamily: "Poppins",
                      }}
                    >
                      $248,000
                    </span>
                  </Typography>
                  <Box
                    sx={{
                      width: "72px",
                      height: "24px",
                      backgroundColor: "#E5EEFB",
                      borderRadius: "2px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "2px 4px",
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ padding: "2px 4px" }}>
                      <Typography
                        sx={{
                          color: "#0F5EDD",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                        }}
                      >
                        $2,302/mo
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "#5F5F5F",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "4px",
                    padding: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
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
                      fontStyle: "normal",
                    }}
                  >
                    | with COE
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    padding: "0",
                    flexDirection: "row",
                    gap: "8px",
                  }}
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
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            component="img"
            src={rectangle700}
            sx={{
              height: "361px",
              width: "281px",
              display: { xs: "block", lg: "none" },
            }}
          />

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
            <img src={rectangle6733} alt="" height="187px" width="281px" />
            <Box sx={{ padding: "16px 0 24px 16px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: "#232323",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                  }}
                >
                  Aston Martin DBS Superlegge...
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "8px",
                  }}
                >
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
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "2px 4px",
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ padding: "2px 4px" }}>
                      <Typography
                        sx={{
                          color: "#0F5EDD",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                        }}
                      >
                        $2,302/mo
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "#5F5F5F",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "4px",
                    padding: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                    }}
                  >
                    1 variants
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    padding: "0",
                    flexDirection: "row",
                    gap: "8px",
                  }}
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
                </Box>
              </Box>
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
            }}
          >
            <img src={rectangle6734} alt="" height="187px" width="281px" />
            <Box sx={{ padding: "16px 0 24px 16px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: "#232323",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                  }}
                >
                  Alfa Romeo Stelvio
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#232323",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                    }}
                  >
                    From{" "}
                    <span
                      style={{
                        color: "#0F5EDD",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontStyle: "normal",
                        fontFamily: "Poppins",
                      }}
                    >
                      $278,000
                    </span>
                  </Typography>
                  <Box
                    sx={{
                      width: "72px",
                      height: "24px",
                      backgroundColor: "#E5EEFB",
                      borderRadius: "2px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "2px 4px",
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ padding: "2px 4px" }}>
                      <Typography
                        sx={{
                          color: "#0F5EDD",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                        }}
                      >
                        $2,302/mo
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "#5F5F5F",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "4px",
                    padding: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
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
                      fontStyle: "normal",
                    }}
                  >
                    | with COE
                  </Typography>
                </Box>

                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    padding: "0",
                    flexDirection: "row",
                    gap: "8px",
                  }}
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
                </Box>
              </Box>
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
            }}
          >
            <img src={rectangle6735} alt="" height="187px" width="281px" />
            <Box sx={{ padding: "16px 0 24px 16px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: "#232323",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                  }}
                >
                  Aston Martin DB11 Volante
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "8px",
                  }}
                >
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
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "2px 4px",
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ padding: "2px 4px" }}>
                      <Typography
                        sx={{
                          color: "#0F5EDD",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                        }}
                      >
                        $2,302/mo
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "#5F5F5F",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "4px",
                    padding: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                    }}
                  >
                    1 variants
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    padding: "0",
                    flexDirection: "row",
                    gap: "8px",
                  }}
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
                </Box>
              </Box>
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
            }}
          >
            <img src={rectangle6736} alt="" height="187px" width="281px" />
            <Box sx={{ padding: "16px 0 24px 16px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: "#232323",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                  }}
                >
                  Aston Martin DB11
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#232323",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                    }}
                  >
                    From{" "}
                    <span
                      style={{
                        color: "#0F5EDD",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontStyle: "normal",
                        fontFamily: "Poppins",
                      }}
                    >
                      $799,000
                    </span>
                  </Typography>
                  <Box
                    sx={{
                      width: "72px",
                      height: "24px",
                      backgroundColor: "#E5EEFB",
                      borderRadius: "2px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "2px 4px",
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ padding: "2px 4px" }}>
                      <Typography
                        sx={{
                          color: "#0F5EDD",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                        }}
                      >
                        $2,302/mo
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "#5F5F5F",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "4px",
                    padding: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                    }}
                  >
                    1 variants
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    padding: "0",
                    flexDirection: "row",
                    gap: "8px",
                  }}
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
                </Box>
              </Box>
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
            }}
          >
            <img src={rectangle6737} alt="" height="187px" width="281px" />
            <Box sx={{ padding: "16px 0 24px 16px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: "#232323",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                  }}
                >
                  Aston Martin DB11 Volante
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "8px",
                  }}
                >
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
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: "2px 4px",
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ padding: "2px 4px" }}>
                      <Typography
                        sx={{
                          color: "#0F5EDD",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                        }}
                      >
                        $2,302/mo
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "#5F5F5F",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "4px",
                    padding: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                    }}
                  >
                    1 variants
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    padding: "0",
                    flexDirection: "row",
                    gap: "8px",
                  }}
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
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Button
            sx={{
              padding: "8px 16px",
              backgroundColor: "white",
              border: "1px solid #EE1B24",
              color: "#EE1B24",
              mt: "24px",
              borderRadius: "5px",
              fontSize: "14px",
              lineHeight: "24px",
              gap: "4px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
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
