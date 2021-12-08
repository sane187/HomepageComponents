import { Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import "./Component3.css";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Component3() {
  return (
    <Box
      className="main"
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Grid container direction="row" marginX={12}>
        <Grid item lg={6} md={6}>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: 60, width: "100%" }}>
              We are here <br /> to help you <br />
              with all your <br />
              training <br />
              needs.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} pt={9}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ChevronRightIcon sx={{ fontSize: 45, color: "#FFB800" }} />{" "}
              Fitness
            </Typography>
            <Typography
              variant="h5"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ChevronRightIcon sx={{ fontSize: 45, color: "#FFB800" }} />
              Strength And Conditioning
            </Typography>
            <Typography
              variant="h5"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ChevronRightIcon sx={{ fontSize: 45, color: "#FFB800" }} />
              Sports Drills
            </Typography>
            <Typography
              variant="h5"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <ChevronRightIcon sx={{ fontSize: 45, color: "#FFB800" }} />
              Skills
            </Typography>
            <Typography
              variant="h5"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <ChevronRightIcon sx={{ fontSize: 45, color: "#FFB800" }} />
              Diet Regimes
            </Typography>
            <Typography
              display="flex"
              variant="h5"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <ChevronRightIcon sx={{ fontSize: 45, color: "#FFB800" }} />
              Psychology
            </Typography>
            <Typography
              display="flex"
              variant="h5"
              alignItems="center"
              justifyContent="center"
            >
              <ChevronRightIcon sx={{ fontSize: 45, color: "#FFB800" }} />
              Injury Prevention
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Component3;
