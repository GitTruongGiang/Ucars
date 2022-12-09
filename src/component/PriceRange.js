import {
  alpha,
  Box,
  Button,
  InputAdornment,
  Popover,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const MinPriceTextfield = styled((props) => (
  <TextField
    variant="filled"
    defaultValue="20,000"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              fontFamily: "Poppins",
              color: "#232323",
            }}
          >
            S$
          </Typography>
        </InputAdornment>
      ),
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
    "&.css-1xab92c-MuiInputBase-root-MuiFilledInput-root:before": {
      borderBottom: "none",
    },
    "&.css-1xab92c-MuiInputBase-root-MuiFilledInput-root:after": {
      borderBottom: "none",
    },
  },
}));

const MaxPriceTextfield = styled((props) => (
  <TextField
    variant="filled"
    defaultValue="500,000"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              fontFamily: "Poppins",
              color: "#232323",
            }}
          >
            S$
          </Typography>
        </InputAdornment>
      ),
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
    "&.css-1xab92c-MuiInputBase-root-MuiFilledInput-root:before": {
      borderBottom: "none",
    },
    "&.css-1xab92c-MuiInputBase-root-MuiFilledInput-root:after": {
      borderBottom: "none",
    },
  },
}));

function PriceRange({ priceRange, setPriceRange }) {
  const handleClose = () => {
    setPriceRange(null);
  };

  const open = Boolean(priceRange);
  const id = open ? "priceRange" : undefined;
  return (
    <Popover
      className="priceRange"
      id={id}
      open={open}
      anchorEl={priceRange}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box
        sx={{
          padding: "24px",
          width: { xs: "342px", lg: "400px" },
          height: "238px",
        }}
      >
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
            Price Range
          </Typography>

          <Stack direction="row" spacing="12px" sx={{ alignItems: "center" }}>
            <MinPriceTextfield label="Min" />

            <Box
              sx={{
                width: "8px",
                height: "1px",
                backgroundColor: "#232323",
                border: "1px solid #232323",
              }}
            ></Box>

            <MaxPriceTextfield label="Max" />
          </Stack>
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

export default PriceRange;
